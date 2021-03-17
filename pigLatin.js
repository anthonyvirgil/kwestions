const pigLatin = (word) => {
	const vowels = ['a', 'e', 'i', 'o', 'u'];
	let vowelIndex = 0;

	if (vowels.includes(word[0])) {
		return word + 'way';
	} else {
		for (let i = 0; i < word.length; i++) {
			if (vowels.includes(word[i])) {
				vowelIndex = i;
				break;
			}
		}
	}

	return word.slice(vowelIndex) + word.slice(0, vowelIndex) + 'ay';
};

console.log(pigLatin('amazon'));
console.log(pigLatin('paris'));
console.log(pigLatin('explain'));
console.log(pigLatin('glove'));
