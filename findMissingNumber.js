const findMissingNumber = (array, arrLength) => {
	let total = ((arrLength + 1) * (arrLength + 2)) / 2;
	for (let i = 0; i < array.length; i++) {
		total -= array[i];
	}
	return total;
};

let array = [1, 3, 4, 5];
console.log(findMissingNumber(array, array.length)); // 2
array = [1, 2, 3, 4, 5];
console.log(findMissingNumber(array, array.length)); // 6
array = [2, 3, 4, 5];
console.log(findMissingNumber(array, array.length)); // 1
