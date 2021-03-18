const stockPicker = (array) => {
	let maxProfit = 0;
	let buyPrice = array[0];
	let sellPrice = 0;

	for (let i = 1; i < array.length; i++) {
		sellPrice = array[i];
		if (sellPrice > buyPrice) {
			maxProfit = Math.max(maxProfit, sellPrice - buyPrice);
		} else {
			buyPrice = array[i];
		}
	}

	return maxProfit;
};

console.log(stockPicker([44, 30, 24, 32, 35, 30, 40, 38, 15]));
