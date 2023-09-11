export class MetaItem {
	constructor(meta) {
		this.name = meta.name;
		this.type = meta.type;
		this.desc = meta.desc;

		this.rawify = meta.rawify;
		this.default = meta.default;

		this.min = meta.min;
		this.max = meta.max;
		this.step = meta.step;
	}
}


export default class WorldFrame {
	static MetaItem = MetaItem;

	/**
	 * 世界元数据
	 * @type {Object}
	 */
	static meta = {
		$: 'D',
		name: new MetaItem({ name: '世界名称', type: 'string' }),
		seed: new MetaItem({ name: '世界种子', type: 'string' }),
		option: { $: '世界法则' },
	};

	/**
	 * 世界名称
	 * @type {string}
	 */
	name;

	/**
	 * 世界种子
	 * @type {any}
	 */
	seed;

	/**
	 * 世界法则
	 * @type {Object}
	 */
	option;


	static setMetaDefault = (meta, data, key) => {
		let result;
		if(meta instanceof MetaItem) {
			const { type: type, default: defaulter } = meta;

			if(typeof defaulter == 'function') {
				result = defaulter(data, key, this);
			}
			else if(defaulter !== undefined) {
				result = defaulter;
			}
			else if(type == 'string') { result = ''; }
			else if(type == 'number') { result = 0; }
			else if(type == 'boolean') { result = true; }
			else if(type == 'object') { result = {}; }
			else if(type == 'array') { result = []; }
		}
		else if(typeof meta == 'object') {
			result = Object.entries(meta).filter(([key]) => key != '$')
				.reduce((dataSub, [keySub, metaSub]) => {
					this.setMetaDefault(metaSub, dataSub, keySub);

					return dataSub;
				}, {});
		}


		return data && key && result !== undefined ?  data[key] = result: result;
	};

	toRaw(meta = this.constructor.meta, data = this) {
		return Object.entries(meta).filter(([key]) => key != '$').reduce((raw, [key, value]) => {

			if(value instanceof MetaItem) {
				const { rawify } = value;

				if(typeof rawify == 'function') {
					raw[key] = rawify(data[key], key, data, this, raw);
				}
				else {
					raw[key] = data[key];
				}

			}
			else if(typeof value == 'object') {
				raw[key] = this.toRaw(value, data[key]);
			}

			return raw;
		}, {});
	}


	constructor() {
		if(new.target === WorldFrame) {
			throw new Error('WorldFrame不能实例化');
		}
	}


	/**
	 * 基于世界种子的世界随机器
	 * @returns {any}
	 */
	random() { }
}
