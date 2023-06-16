/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

function calculateTotalSpentByCategory(transactions) {
  let ans = [];

  for (let i = 0; i < transactions.length; i++) {
    const item = transactions[i]; 
    const index = ans.findIndex((obj) => {
      return obj.category === item.category;
    });
    if (index === -1) {
      ans.push({ category: item.category, totalSpent: item.price });
    } else {
      ans[index].totalSpent += item.price;
    }
  }

  return ans;
}
module.exports = calculateTotalSpentByCategory;
