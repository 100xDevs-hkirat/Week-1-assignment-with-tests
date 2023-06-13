/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

function calculateTotalSpentByCategory(transactions) {
  const categories = new Map();

  for (const transaction of transactions) {
    if (!categories.has(transaction.category)) {
      categories.set(transaction.category, 0);
    }

    categories.set(transaction.category, categories.get(transaction.category) + transaction.price);
  }

  const results = [];
  for (const [category, total] of categories.entries()) {
    results.push({
      category,
      totalSpent: total,
    });
  }

  return results;
}

module.exports = calculateTotalSpentByCategory;