const hammingDistance = (string1, string2) => {
	let result = 0;

	if (string1.length !== string2.length) {
		throw new Error('The two strings do not have the same length');
	}

	for (let i = 0; i < string1.length; i++) {
		if (string1[i].toLowerCase() !== string2[i].toLowerCase()) {
			result += 1;
		}
	}

	return result;
};

console.log(hammingDistance('river', 'rover')); // 1
console.log(hammingDistance('river', 'racer')); // 2
console.log(hammingDistance('weird', 'racer')); // 5
