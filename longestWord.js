const longestWord = (word) => {
	let longestWord = '';
	let wordArray = word.split(' ');
	let longestLength = 0;

	for (let i = 0; i < wordArray.length; i++) {
		if (wordArray[i].length > longestLength) {
			longestLength = wordArray[i].length;
			longestWord = wordArray[i];
		}
	}

	return longestWord;
};

console.log(longestWord('Top Shelf Web Development Training on Scotch'));
