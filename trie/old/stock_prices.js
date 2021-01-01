const stockPrices = [10, 7, 5, 8, 11, 9];
//                    |

console.log(getProfile2());

function getProfile2() {
  let minStockPrice = stockPrices[0]
  let profit = 0;
  for(let i = 1; i < stockPrices.length; i++) {
    const currentStockPrice = stockPrices[i];
    minStockPrice = Math.min(currentStockPrice, minStockPrice);
    const potentialProfit = currentStockPrice - minStockPrice;
    profit = Math.max(profit, potentialProfit)
  }
  return profit;
}

// function getProfile2() {
//   let minPrice = stockPrices[0];
//   let maxProfit = 0;

//   for(let i = 0; i < stockPrices.length; i++) {
//     const currentPrice = stockPrices[i];
//     minPrice = Math.min(currentPrice, minPrice);
//     const potentialProfit = currentPrice - minPrice;
//     maxProfit = Math.max(maxProfit, potentialProfit);
//   }
//   return maxProfit;
// }

function getProfit() {
  const results = [];
  let profit = 0;
  for (let i = 0; i < stockPrices.length - 1; i++) {
    const buying = stockPrices[i];
    for (let j = i + 1; j < stockPrices.length; j++) {
      const selling = stockPrices[j];
      if (selling > buying) {
        if (selling - buying > profit) {
          profit = selling - buying;
          results.length = 0;
          results.push([stockPrices[i], stockPrices[j]]);
        }
      }
    }
  }
  return { profit, results };
}
