const twoSum = (arr, target) => {
	let map = {};
	for (let i = 0; i < arr.length; i++) {
		map[arr[i]] = i;
	}
	for (let i = 0; i < arr.length; i++) {
		let diff = target - arr[i];
		if (map.hasOwnProperty(diff) && map[diff] !== i) {
			return [i, map[diff]];
		}
	}
};

console.log(twoSum([2, 7, 11, 15], 26)); // [2,3]
console.log(twoSum([2, 7, 11, 15], 9)); // [0,1]
