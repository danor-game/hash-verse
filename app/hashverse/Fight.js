const highlight = string => String(string)
	.replace(/~\[(.*?)\]/g, (substr, groupA, index, raw) => {
		return `<span style="color:green;font-weight:bold;">${groupA}</span>`;
	})
	.replace(/~\{(.*?)\}/g, (substr, groupA, index, raw) => {
		return `<span style="color:red">${groupA}</span>`;
	})
	;

class Fight {
	static sDraw = Symbol('平手');


	nife1;
	nife2;

	logs = [];
	winner = null;

	constructor(nife1, nife2) {
		if(!nife1 || !nife2) { throw ('战斗人数不足'); }


		this.nife1 = nife1;
		this.nife2 = nife2;
	}


	start() {
		const logs = this.logs;


		logs.splice(0, logs.length);
		this.winner = null;
		this.isDraw = false;


		let { name: name1, hp: hp1, atk: atk1, def: def1 } = this.nife1;
		let { name: name2, hp: hp2, atk: atk2, def: def2 } = this.nife2;


		while(hp1 > 0 && hp2 > 0) {
			let damage1_2 = atk1 - def2;
			let damage2_1 = atk2 - def1;

			damage1_2 = damage1_2 < 0 ? 0 : damage1_2;
			damage2_1 = damage2_1 < 0 ? 0 : damage2_1;


			hp1 -= damage2_1;
			hp2 -= damage1_2;


			logs.push(highlight(`~[[${name1}]] 攻击 ~[[${name2}]]，造成~{${damage1_2}}伤害，~[[${name2}]]剩余血量~{${hp2}}`));
			logs.push(highlight(`~[[${name2}]] 攻击 ~[[${name1}]]，造成~{${damage2_1}}伤害，~[[${name1}]]剩余血量~{${hp1}}`));
		}


		let winner;
		let loser;
		let hpRemain;
		if(hp1 <= 0 && hp2 <= 0) {
			logs.push(highlight(`~[[${name1}]]、~[[${name2}]]双方同时阵亡，平手`));

			winner = Fight.sDraw;
		}
		else {
			if(hp1 <= 0) { winner = this.nife2; loser = this.nife1; hpRemain = hp2; }
			if(hp2 <= 0) { winner = this.nife1; loser = this.nife2; hpRemain = hp1; }

			logs.push('');
			logs.push(highlight(`~[[${loser.name}]]先阵亡，~[[${winner.name}]]胜利，剩余血量 ~{${hpRemain} (${Math.round(100 * hpRemain / winner.hpMax)}%)}`));
		}

		this.winner = winner;
	}
}


export default Fight;
