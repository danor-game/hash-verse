import WorldFrame from '../lib/world-frame.js';
import PR from 'pure-rand';

import Nife from './nife.js';



export default class World extends WorldFrame {
	static Nife = Nife;

	/**
	 * 世界名称
	 * @type {string}
	 */
	name;


	attributes = {
		health: {
			exist: true,
			max: 1024,
		},
		attack: {
			exist: true,
			max: 128,
		},
		defense: {
			exist: true,
			max: 128,
		},
		speed: {
			exist: true,
			max: 128,
		},
		get maxTotal() {
			return [this.health, this.attack, this.defense, this.speed].reduce((acc, cur) => acc + cur.max, 0);
		}
	};


	/** @type {Nife[]} */
	nifes = [];



	constructor(data = {}) {
		super();

		this.name = data.name;
		this.seed = data.seed;

		this.option = data.option;

		this.nifes = data.nifes.map(dataNife => this.born(dataNife));

		this.namesFighter = data.namesFighter ??[];
	}



	/** @type {number} */
	seedNumberCache;
	get seedNumber() { return this.seedNumberCache; }

	/**
	 * 基于世界线的随机数
	 * @param {number} [num]
	 * @param {number} [from]
	 * @param {number} [to]
	 * @returns {number|number[]}
	 */
	random(num = 1, from = 0, to = 99) {
		const rng = PR.xoroshiro128plus(Date.now() ^ (this.seedNumberCache * 0x100000000));


		if(num == 1) { return PR.unsafeUniformIntDistribution(from, to, rng); }


		const numbers = [];
		while(num-- > 0) { numbers.push(PR.unsafeUniformIntDistribution(from, to, rng)); }

		return numbers;
	}


	flush() {
		this.seedNumberCache = Number(`0b${this.seed.split('').map(c => c.codePointAt(0).toString(2).padStart(8, '0')).join('')}`);
	}

	toJSON() {
		return {
			name: this.name,
			seed: this.seed,

			option: this.option,

			nifes: this.nifes.map(nife => nife.toJSON()),


			namesFighter: this.namesFighter,
		};
	}

	born(data) {
		const nife = new Nife(data.name, this);

		this.nifes.push(nife);

		return nife;
	}


	/** @type {string[]} */
	namesFighter = [];
}


Object.defineProperty(World, 'Nife', { writable: false });
