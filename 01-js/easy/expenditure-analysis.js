/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

function calculateTotalSpentByCategory(transactions) {
  const categoryTotal = {};

  transactions.forEach(transaction => {
    const { category, price } = transaction;

    if (category in categoryTotal) {
      categoryTotal[category] += price;
    } else {
      categoryTotal[category] = price;
    }
  });

  const result = [];

  for (const category in categoryTotal) {
    const totalAmount = categoryTotal[category];
    const categoryObject =   { "category":category, "totalSpent":totalAmount };
    result.push(categoryObject);
  }

  return result;
}

module.exports = calculateTotalSpentByCategory;
