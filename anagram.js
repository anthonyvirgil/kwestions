// creates hash map of characters in string with occurrences
const createCharMap = (string) => {
	let charMap = {};
	for (let char of string) {
		if (charMap.hasOwnProperty(char)) {
			charMap[char] += 1;
		} else {
			charMap[char] = 1;
		}
	}

	return charMap;
};

// checks if two strings are anagrams
const isAnagram = (string1, string2) => {
	if (string1.length !== string2.length) {
		return false;
	}

	let charMap1 = createCharMap(string1);
	let charMap2 = createCharMap(string2);
	for (let key in charMap1) {
		if (charMap1[key] !== charMap2[key]) {
			return false;
		}
	}
	return true;
};

console.log(isAnagram('silent', 'listen')); // true
console.log(isAnagram('silent', 'hello')); // false
console.log(isAnagram('silent', 'coffee')); // false
