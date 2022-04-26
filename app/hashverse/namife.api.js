const { createHmac } = await import('crypto');

const hash = name => {
	return Buffer.from(createHmac('sm3', 'D').update(name).digest('binary'));
};


export const method = 'get';
export const handle = raw => {
	const { name } = raw;


	if(typeof name != 'string' || !name) { throw Error('参数~[name]类型不对'); }


	const seed = hash(name);

	return {
		hp: seed.readUInt16LE(0) % 1024,
		atk: seed.readUInt16LE(2) % 128,
		def: seed.readUInt16LE(4) % 128,
	};
};
