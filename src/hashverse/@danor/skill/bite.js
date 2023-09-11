import { highlight } from '../fight.js';


/** @typedef {import('../nife.js').default} Nife */


/** @param {Nife} source */
export default function attachBiteSkill(source) {
	/**
	 * 撕咬
	 * @param {Nife[]} targets
	 * @param {string[]} logs
	 */
	return function bite(targets, logs) {
		const world = source.world;

		const optionSkill = world.option.skills.bite;

		const target = targets[0];

		const { body: bodyS } = source;
		const { body: bodyT } = target;


		let multipleCritical = 1;
		let triggerCritical = false;

		if(optionSkill.critical.enable) {
			triggerCritical = optionSkill.critical.trigger >= 100
				? true
				: world.randomType(1, `${source.name}-bite-${target.name}`) < optionSkill.critical.trigger;


			if(triggerCritical) {
				multipleCritical = optionSkill.critical.multiple;
			}
		}


		let multipleDefense = optionSkill.defense.multiple;
		let triggerDefense = false;

		if(optionSkill.defense.enable) {
			triggerDefense = optionSkill.defense.trigger >= 100
				? true
				: world.randomType(1, `${source.name}-defense-${target.name}`) < optionSkill.defense.trigger;
		}


		const attack = Math.round(bodyS.attack * multipleCritical);

		const defense = triggerDefense ? Math.round(bodyT.defense * multipleDefense) : 0;

		const damage = Math.max(attack - defense, 0);

		bodyT.health -= damage;


		logs.push(highlight([
			`~[${source.name}]撕咬~[${target.name}]`,
			`造成~${triggerCritical ? 'o' : 'r'}{${damage}}${triggerCritical ? '暴伤' : '伤害'}`,
			triggerDefense ? `防御~r{${defense}}伤害` : '',
		].join(' ')));
	};
}
