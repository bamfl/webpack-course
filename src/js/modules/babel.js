async function start() {
	return await Promise.resolve('Working...');
}

class Util {
	static id = Date.now();
}


export {start, Util};