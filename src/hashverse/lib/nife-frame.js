class NifeFrame {
	constructor() {
		if(new.target === NifeFrame) {
			throw new Error('Nife0不能实例化');
		}
	}
}



export default NifeFrame;
