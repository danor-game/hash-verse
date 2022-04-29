import SM3 from 'sm3';


class Nife {
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


	constructor(name) {
		this.name = name;
		const seed = this.seed = SM3(name);


		this.attribute.health = Number(`0x${seed.slice(0, 4)}`) % this.healthMax;
		this.attribute.attack = Number(`0x${seed.slice(4, 8)}`) % this.atkMax;
		this.attribute.defense = Number(`0x${seed.slice(8, 12)}`) % this.defMax;
		this.attribute.speed = Number(`0x${seed.slice(12, 16)}`) % this.spdMax;
	}
}


export default Nife;
