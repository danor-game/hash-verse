import { $alert } from '@nuogz/vue-alert';

import World from '../@danor/world.js';



export class WorldAdmin {
	/** @type {World[]} */
	worlds = [];

	/**
	 * @returns {World[]}
	 */
	load() {
		const raw = localStorage.getItem('worlds');

		try {
			return this.worlds = (raw ? JSON.parse(raw) : []).map(rawWorld => new World(rawWorld));
		}
		catch(error) {
			$alert(`${error.message || error}`, '加载世界失败');

			globalThis.console.error(error);
		}
	}

	save() {
		localStorage.setItem('worlds', JSON.stringify(this.worlds.map(world => world.toJSON())));
	}
}


const WA = new WorldAdmin();


export default WA;
