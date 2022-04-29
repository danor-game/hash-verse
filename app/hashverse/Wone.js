class Wone {
	raw;

	name;
	seed;



	attribute = {
		health: 0,
		attack: 0,
		defense: 0,
		speed: 0,
	};

	healthMax = 1024;
	atkMax = 128;
	defMax = 128;
	spdMax = 128;


	constructor(data = {}) {
		this.raw = data;

		this.name = data.name;
	}
}


export default Wone;
