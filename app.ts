let pricesSet1 = [1500, 1800, 1200];
let pricesSet2 = [2000, 1900, 1000];
let combinedPrices = [...pricesSet1, ...pricesSet2].sort((a, b) => a - b);
console.log(combinedPrices);
