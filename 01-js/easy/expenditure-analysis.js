/*
   

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

function calculateTotalSpentByCategory(transactions) {
  const categoryTotals = {};

  
  for (const transaction of transactions) {
    const { category, price } = transaction;

    console.log(categoryTotals[category])
    if (category in categoryTotals) {
     
      categoryTotals[category] += price;
    } else {
 
      categoryTotals[category] = price;
    }
  }

 
  const result = Object.keys(categoryTotals).map((category) => ({
    category,
    totalSpent: categoryTotals[category],
  }));

  return result;

  
}
module.exports = calculateTotalSpentByCategory;
