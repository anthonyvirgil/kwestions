const maxRecurringChar = (text) => {
	let charMap = {};
	let maxCharValue = 0;
	let maxChar = null;

	for (let i = 0; i < text.length; i++) {
		let char = text[i];
		if (charMap.hasOwnProperty(char)) {
			charMap[char] += 1;
		} else {
			charMap[char] = 1;
		}
	}

	for (let char in charMap) {
		if (charMap[char] > maxCharValue) {
			maxChar = char;
			maxCharValue = charMap[char];
		}
	}

	return maxChar;
};

console.log(maxRecurringChar('aabbacbabdbab'));
