import { highlight } from '../fight.js';


/** @typedef {import('../nife.js').default} Nife */


/** @param {Nife} source */
export default function attachBiteSkill(source) {
	/**
	 * 咬
	 * @param {Nife[]} targets
	 * @param {string[]} logs
	 */
	return function bite(targets, logs) {
		const target = targets[0];

		const { body: bodyS } = source;
		const { body: bodyT } = target;


		const damage = Math.max(bodyS.attack - bodyT.defense, 0);

		bodyT.health -= damage;


		logs.push(highlight(`~[${source.name}] 攻击 ~[${target.name}]，造成~r{${damage}}伤害，~[${target.name}]生命~g{${bodyT.health}(${Math.round(100 * bodyT.health / bodyT.healthMax)}%)}`));
	};
}
