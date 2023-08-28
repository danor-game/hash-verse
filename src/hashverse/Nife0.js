class Nife0 {
	constructor() {
		if(new.target === Nife0) {
			throw new Error('Nife0不能实例化');
		}
	}
}



export default Nife0;
