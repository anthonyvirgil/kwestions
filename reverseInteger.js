const reverseInteger = (number) => {
	let reversed = parseInt(`${number}`.split('').reverse().join(''));
	return number < 0 ? reversed * -1 : reversed;
};

console.log(reverseInteger(-123)); // -321
console.log(reverseInteger(123456789)); // 987654321
