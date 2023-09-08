import SM3 from 'sm3';

import NifeFrame from '../lib/nife-frame.js';

import attachBiteSkill from './skill/bite.js';



export default class Nife extends NifeFrame {
	/**
	 * 名字
	 * @type {string}
	 */
	name;

	/**
	 * 世界
	 * @type {World}
	 */
	world;


	/**
	 * 种子（缓存）
	 * @type {string}
	 */
	seedCache;
	/**
	 * 种子
	 * @type {string}
	 */
	get seed() { return this.seedCache; }



	/** 属性 */
	attribute = {
		/** @type {Nife} */
		this: this,

		/**
		 * 生命
		 * @type {number}
		 */
		get health() { return Number(`0x${this.this.seed.slice(0, 4)}`) % this.healthMax; },
		/**
		 * 生命上限
		 * @type {number}
		 */
		get healthMax() { return this.this.world.attributes.health.max; },
		/**
		 * 攻击
		 * @type {number}
		 */
		get attack() { return Number(`0x${this.this.seed.slice(4, 8)}`) % this.attackMax; },
		/**
		 * 攻击上限
		 * @type {number}
		 */
		get attackMax() { return this.this.world.attributes.attack.max; },
		/**
		 * 防御
		 * @type {number}
		 */
		get defense() { return Number(`0x${this.this.seed.slice(8, 12)}`) % this.defenseMax; },
		/**
		 * 防御上限
		 * @type {number}
		 */
		get defenseMax() { return this.this.world.attributes.defense.max; },
		/**
		 * 速度
		 * @type {number}
		 */
		get speed() { return Number(`0x${this.this.seed.slice(12, 16)}`) % this.speedMax; },
		/**
		 * 速度上限
		 * @type {number}
		 */
		get speedMax() { return this.this.world.attributes.speed.max; },

		get total() { return this.health + this.attack + this.defense + this.speed; },
		get totalMax() { return this.healthMax + this.attackMax + this.defenseMax + this.speedMax; },
	};

	/** 技能 */
	skill = {
		bite: attachBiteSkill(this),
	};



	/** 身体（状态） */
	body = {
		/** 生命 */
		health: 0,
		/** 最大生命 */
		healthMax: 0,
		/** 攻击 */
		attack: 0,
		/** 最大攻击 */
		attackMax: 0,
		/** 防御 */
		defense: 0,
		/** 最大防御 */
		defenseMax: 0,
		/** 速度 */
		speed: 0,
		/** 最大速度 */
		speedMax: 0,
	};


	action(targets, logs) {
		return this.skill.bite(targets, logs);
	}



	/**
	 * @param {string} name
	 * @param {World} world
	 */
	constructor(name, world) {
		super();

		this.name = name;
		this.world = world;

		this.flush();
	}


	toJSON() {
		return {
			name: this.name
		};
	}

	flush() {
		this.seedCache = SM3(this.world.seed + this.name);
	}
}
