import PR from 'pure-rand';
import SM3 from 'sm3';

import { randomString } from '@nuogz/utility';

import WorldFrame from '../lib/world-frame.js';

import Nife from './nife.js';



const MetaItem = WorldFrame.MetaItem;


export default class World extends WorldFrame {
	static meta = {
		$: 'D',

		name: new MetaItem({ name: '世界名称', type: 'string', default: () => randomString(6) }),
		seed: new MetaItem({ name: '世界种子', type: 'string', default: raw => raw.name }),

		option: {
			$: '世界法则',

			fight: {
				$: '战斗法则',
				roundMax: new MetaItem({ name: '最大回合数', type: 'number', default: 300 }),
			},

			attributes: {
				$: '属性',
				health: {
					$: '生命',
					max: new MetaItem({ name: '最大值', type: 'number', default: 1024 }),
				},
				attack: {
					$: '攻击',
					max: new MetaItem({ name: '最大值', type: 'number', default: 128 }),
				},
				defense: {
					$: '防御',
					max: new MetaItem({ name: '最大值', type: 'number', default: 128 }),
				},
				speed: {
					$: '速度',
					max: new MetaItem({ name: '最大值', type: 'number', default: 128 }),
				},
			},

			skills: {
				$: '技能',
				bite: {
					$: '撕咬',
					defense: {
						$: { name: '防御', type: '防御可抵御攻击，减少伤害' },
						enable: new MetaItem({ name: '开关', type: 'boolean' }),
						trigger: new MetaItem({ name: '触发概率', type: 'number', default: 100, desc: '0=必不发生；100=必定发生' }),
						multiple: new MetaItem({ name: '防御系数', type: 'number', default: 1, step: 0.1 }),
					},
					critical: {
						$: { name: '暴击', type: '暴击可造成更多伤害' },
						enable: new MetaItem({ name: '开关', type: 'boolean' }),
						trigger: new MetaItem({ name: '触发概率', type: 'number', default: 20, desc: '0%=必不发生；100%=必定发生' }),
						multiple: new MetaItem({ name: '攻击系数', type: 'number', default: 1.5, step: 0.1 }),
					}
				}
			}
		},

		nifes: new MetaItem({ name: '妮芙数据', type: 'array', rawify: nifes => nifes.map(nife => nife.toRaw()) }),
		namesFighter: new MetaItem({ name: '出战名单', type: 'array' }),
	};



	constructor(data = {}) {
		super();

		this.name = data.name;
		this.seed = data.seed;

		this.option = data.option;

		this.nifes = data.nifes.map(dataNife => this.born(dataNife));

		this.namesFighter = data.namesFighter ?? [];

		this.flush();
	}


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


	static Nife = Nife;
	/** @type {Nife[]} */
	nifes = [];



	/** @type {number} */
	seedNumberCache;
	get seedNumber() { return this.seedNumberCache; }

	/**
	 * 基于世界线的随机数
	 * @param {number} [num]
	 * @param {number} [from]
	 * @param {number} [to]
	 * @param {number} [timestamp]
	 * @returns {number|number[]}
	 */
	random(num = 1, from = 0, to = 99, timestamp = Date.now()) {
		const rng = PR.xoroshiro128plus(timestamp ^ (this.seedNumberCache * 0x100000000));


		if(num == 1) { return PR.unsafeUniformIntDistribution(from, to, rng); }


		const numbers = [];
		while(num-- > 0) { numbers.push(PR.unsafeUniformIntDistribution(from, to, rng)); }

		return numbers;
	}
	/**
	 * 基于世界线的随机数
	 * @param {number} [num]
	 * @param {number} [type]
	 * @param {number} [from]
	 * @param {number} [to]
	 * @param {number} [timestamp]
	 * @returns {number|number[]}
	 */
	randomType(num = 1, type, from = 0, to = 99, timestamp = Date.now()) {
		const rng = PR.xoroshiro128plus(timestamp ^ World.toSeedNumber(type));

		if(num == 1) { return PR.unsafeUniformIntDistribution(from, to, rng); }


		const numbers = [];
		while(num-- > 0) { numbers.push(PR.unsafeUniformIntDistribution(from, to, rng)); }


		return numbers;
	}

	static toSeedNumber(string) { return Number(`0x${SM3(string).slice(0, 13)}`); }

	flush() {
		this.seedNumberCache = World.toSeedNumber(this.seed);

		this.attributes.health.max = this.option.attributes.health.max;
		this.attributes.attack.max = this.option.attributes.attack.max;
		this.attributes.defense.max = this.option.attributes.defense.max;
		this.attributes.speed.max = this.option.attributes.speed.max;
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
