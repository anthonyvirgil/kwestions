const integerPalindrome = (number) => {
	let numberString = number.toString();
	return isPalindrome(numberString);
};

const isPalindrome = (text) => {
	for (let i = 0; i < text.length / 2; i++) {
		if (text[i] !== text[text.length - 1 - i]) {
			return false;
		}
	}
	return true;
};

console.log(integerPalindrome(123)); // false
console.log(integerPalindrome(121)); // true
