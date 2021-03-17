const reverseInteger = (number) => {
	const numberString = number.toString();
	const reverseString = [...numberString].reduce((acc, char) => char + acc, '');
	return parseInt(reverseString) * Math.sign(number);
};

console.log(reverseInteger(-123)); // -321
console.log(reverseInteger(123456789)); // 987654321
