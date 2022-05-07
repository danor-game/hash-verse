import SM3 from 'sm3';

import Nife0 from './Nife0.js';



class Nife extends Nife0 {
	/**
	 * 名字
	 * @type {string}
	 */
	name;

	/**
	 * 世界种子
	 * @type {string}
	 */
	seedWone;


	/**
	 * 种子
	 * @type {string}
	 */
	seed;


	/**
	 * 属性
	 * @type {Object}
	 */
	attribute = {
		/**
		 * 生命
		 * @type {number}
		 */
		health: 0,
		/**
		 * 攻击点
		 * @type {number}
		 */
		attack: 0,
		/**
		 * 防御点
		 * @type {number}
		 */
		defense: 0,
		/**
		 * 速度点
		 * @type {number}
		 */
		speed: 0,
	};


	toJSON() {
		return {
			name: this.name
		};
	}
}

class Wone {
	static Nife = Nife;


	raw;

	name;
	seed;

	attributes = {
		health: {
			exist: true,
			max: 1024,
			born: (seed, attribute) => Number(`0x${seed.slice(0, 4)}`) % attribute.max,
		},
		attack: {
			exist: true,
			max: 128,
			born: (seed, attribute) => Number(`0x${seed.slice(4, 8)}`) % attribute.max,
		},
		defense: {
			exist: true,
			max: 128,
			born: (seed, attribute) => Number(`0x${seed.slice(8, 12)}`) % attribute.max,
		},
		speed: {
			exist: true,
			max: 128,
			born: (seed, attribute) => Number(`0x${seed.slice(12, 16)}`) % attribute.max,
		},
	};


	/** @type {Nife[]} */
	nifes = [];


	constructor(data = {}) {
		this.raw = data;

		this.name = data.name;
		this.seed = data.seed;

		this.fight = data.fight;

		this.nifes = data.nifes.map(dataNife => this.born(dataNife));
	}

	toJSON() {
		return {
			name: this.name,
			seed: this.seed,

			fight: {
				roundMax: this.fight?.roundMax
			},

			nifes: this.nifes.map(nife => nife.toJSON()),
		};
	}

	born(data) {
		const nife = new Wone.Nife();
		nife.name = data.name;


		nife.seedWone = this.seed;
		const seed = nife.seed = SM3(nife.seedWone + data.name);


		for(const attributeKey in this.attributes) {
			const attribute = this.attributes[attributeKey];

			if(!attribute.exist) { continue; }

			nife.attribute[attributeKey] = attribute.born(seed, attribute);
			nife.attribute[attributeKey + 'Limit'] = attribute.max;
		}

		this.nifes.push(nife);

		return nife;
	}
}


Object.defineProperty(Wone, 'Nife', { writable: false });



export default Wone;
