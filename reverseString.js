const reverseString = (word) => {
	let result = '';
	for (let i = word.length - 1; i >= 0; i--) {
		result += word[i];
	}
	return result;
};

const reverseString2 = (word) => {
	return [...word].reverse().join('');
};

const reverseString3 = (word) => {
	return word.split('').reverse().join('');
};

const reverseString4 = (word) => {
	return [...word].reduce((acc, char) => char + acc, '');
};

let word = 'algorithms';
console.log(reverseString(word));
console.log(reverseString2(word));
console.log(reverseString3(word));
console.log(reverseString4(word));
