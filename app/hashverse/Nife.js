import SM3 from 'sm3';


class Nife {
	name;
	seed;


	hp;
	atk;
	def;

	hpMax = 1024;
	atkMax = 128;
	defMax = 128;


	constructor(name) {
		this.name = name;
		const seed = this.seed = SM3(name);


		this.hp = Number(`0x${seed.slice(0, 4)}`) % this.hpMax;
		this.atk = Number(`0x${seed.slice(4, 8)}`) % this.atkMax;
		this.def = Number(`0x${seed.slice(8, 12)}`) % this.defMax;
	}
}


export default Nife;
