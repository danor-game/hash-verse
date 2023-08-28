import { $alert } from '../lib/plugin/Alert/Alert.js';

import Wone from './Wone.js';



export class WoneAdmin {
	/** @type {Wone[]} */
	wones = [];

	/**
	 * @returns {Wone[]}
	 */
	load() {
		const raw = localStorage.getItem('wones');

		try {
			return this.wones = (raw ? JSON.parse(raw) : []).map(woneRaw => new Wone(woneRaw));
		}
		catch(error) {
			$alert(`${error.message || error}`, '加载世界线失败');
		}
	}

	save() {
		localStorage.setItem('wones', JSON.stringify(this.wones.map(wone => wone.toJSON())));
	}
}


const WA = new WoneAdmin();


export default WA;
