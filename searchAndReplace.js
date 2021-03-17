const searchReplace = (str, word, newWord) => {
	// check for searched word capitalization, capitalize new word
	if (word[0] === word[0].toUpperCase()) {
		newWord = newWord[0].toUpperCase() + newWord.slice(1);
	}
	return str.replace(word, newWord);
};

const searchReplace2 = (str, word, newWord) => {
	let wordArray = str.split(' ');

	if (word[0] === word[0].toUpperCase()) {
		newWord = newWord[0].toUpperCase() + newWord.slice(1);
	}

	// replace each word in sentence with new word
	for (let i = 0; i < wordArray.length; i++) {
		if (wordArray[i] === word) {
			wordArray[i] = newWord;
		}
	}

	return wordArray.join(' ');
};

console.log(
	searchReplace('He is Sleeping on the couch', 'Sleeping', 'sitting')
);
console.log(
	searchReplace2('He is Sleeping on the couch', 'Sleeping', 'sitting')
);
