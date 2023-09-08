export const highlight = string => String(string)
	.replace(/~\[(.*?)\]/g, (substr, groupA, index, raw) => `<span style="color:var(--cHighlightNoun);font-weight:bold">${groupA}</span>`)
	.replace(/~g\{(.*?)\}/g, (substr, groupA, index, raw) => `<span style="color:var(--cHighlightGreen)">${groupA}</span>`)
	.replace(/~r\{(.*?)\}/g, (substr, groupA, index, raw) => `<span style="color:var(--cHighlightRed)">${groupA}</span>`)
	;



export default class Fight {
	static sDraw = Symbol('平手');


	/** @type {import('./nife.js').default} */
	nife1;
	/** @type {import('./nife.js').default} */
	nife2;
	/** @type {import('./world.js').default} */
	world;

	/**
	 * 战斗法则
	 * @type {Object}
	 */
	option = {
		effectSpeed: 'compare'
	};

	logs = [];

	winner = null;


	constructor(nife1, nife2, world) {
		if(!nife1 || !nife2) { throw ('战斗人数不足'); }


		this.nife1 = nife1;
		this.nife2 = nife2;
		this.world = world;


		this.option = Object.assign({
			// 最大回合数
			roundMax: 100,
		}, world?.option?.fight);
	}


	/** @param {import('./nife.js').default} nife */
	resetNifeBody(nife) {
		nife.body.health = nife.attribute.health;
		nife.body.healthMax = nife.attribute.healthMax;
		nife.body.attack = nife.attribute.attack;
		nife.body.attackMax = nife.attribute.attackMax;
		nife.body.defense = nife.attribute.defense;
		nife.body.defenseMax = nife.attribute.defenseMax;
		nife.body.speed = nife.attribute.speed;
		nife.body.speedMax = nife.attribute.speedMax;
	}


	start(isResetLog = true) {
		const logs = this.logs;
		if(isResetLog) { logs.splice(0, logs.length); }


		const nife1 = this.nife1;
		const nife2 = this.nife2;
		const { body: body1 } = nife1;
		const { body: body2 } = nife2;


		const nifes = [nife1, nife2];


		this.winner = null;
		this.isDraw = false;


		this.resetNifeBody(nife1);
		this.resetNifeBody(nife2);





		let { name: name1, attribute: { speed: spd1 } } = nife1;
		let { name: name2, attribute: { speed: spd2 } } = nife2;


		let round = 0;
		while(body1.health > 0 && body2.health > 0) {
			round++;

			if(round > this.option.roundMax) {
				logs.push(highlight(`~[${name1}]、~[${name2}]双方无法在${this.option.roundMax}回合内分出胜负，平手`));

				this.winner = Fight.sDraw;
				this.isDraw = true;

				return;
			}


			const nifesOrderFight = [];
			// 速度作用
			// progress, 基于两者速度最大值 速度跑条, 条满攻击, 差距过大的话可连续攻击
			if(this.option.effectSpeed == 'progress') {
				void 0;
			}
			// compare, 比大小, 大者这先攻击
			else {
				let spd1t = spd1;
				let spd2t = spd2;

				while(spd1t == spd2t) {
					spd1t = this.world.random();
					spd2t = this.world.random();
				}


				if(spd1t > spd2t) { nifesOrderFight.push(nife1, nife2); }
				if(spd1t < spd2t) { nifesOrderFight.push(nife2, nife1); }
			}


			for(const nife of nifesOrderFight) {
				nife.action(nifes.filter(n => n != nife), logs);

				const winner = this.isEnd();


				if(winner) { return winner; }
			}
		}
	}


	isEnd() {
		const nife1 = this.nife1;
		const nife2 = this.nife2;
		const { body: body1 } = nife1;
		const { body: body2 } = nife2;


		const die1 = body1.health <= 0;
		const die2 = body2.health <= 0;


		if(die1 && die2) {
			this.logs.push('', highlight(`~[${nife1.name}]、~[${nife2.name}]双方同时阵亡，平手`));

			this.isDraw = true;
			return this.winner = Fight.sDraw;
		}
		else if(die1 || die2) {
			let winner;
			let loser;
			let hpRemain;

			if(die1) { winner = nife2; loser = nife1; hpRemain = body2.health; }
			if(die2) { winner = nife1; loser = nife2; hpRemain = body1.health; }

			this.logs.push('', highlight(`~[${loser.name}] 阵亡，~[${winner.name}] 获胜，剩余生命~g{${hpRemain}(${Math.round(100 * hpRemain / winner.attribute.healthMax)}%)}`));

			return this.winner = winner;
		}
	}
}
