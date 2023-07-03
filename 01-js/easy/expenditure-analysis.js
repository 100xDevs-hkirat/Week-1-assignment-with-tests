/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

function calculateTotalSpentByCategory(transactions) {
  let categoryTotal = {};

  for (let i = 0; i < transactions.length; i++) {
    let { category, price } = transactions[i];
    if (categoryTotal.hasOwnProperty(category)) {
      categoryTotal[category] += price;
    } else {
      categoryTotal[category] = price;
    }
  }

  let arr = [];

  for (let category in categoryTotal) {
    arr.push({ category, totalSpent: categoryTotal[category] });
  }

  console.log(arr);

  return arr;
}

module.exports = calculateTotalSpentByCategory;
