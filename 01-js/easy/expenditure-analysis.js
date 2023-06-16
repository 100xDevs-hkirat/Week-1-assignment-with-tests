/*
  

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

function calculateTotalSpentByCategory(transactions) {
  const categoryTotals = {};

  for(const transaction in transactions){
    if (categoryTotals.hasOwnProperty(transactions[transaction].category)) {
      categoryTotals[transactions[transaction].category] += transactions[transaction].price;
    } else {
      categoryTotals[transactions[transaction].category] = transactions[transaction].price;
    }
  }
  const result = [];

  for (const category in categoryTotals) {
    result.push({ category: category,totalSpent: categoryTotals[category] });
  }

  return result;
}


module.exports = calculateTotalSpentByCategory;
