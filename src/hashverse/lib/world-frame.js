class WorldFrame {
	/**
	 * 世界法则
	 * @type {Object}
	 */
	option;

	/**
	 * 世界种子
	 * @type {any}
	 */
	seed;


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



export default WorldFrame;
