/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

function calculateTotalSpentByCategory(transactions) {
  const categoryMap = {};
  for (let i = 0; i < transactions.length; i++) {
    const { category, price } = transactions[i];

    // If the category already exists in the map, add the price to the total spent
    if (categoryMap[category]) {
      categoryMap[category] += price;
    } else {
      // If the category doesn't exist, initialize it with the price
      categoryMap[category] = price;
    }
  }
  const result = Object.entries(categoryMap).map(([category, totalSpent]) => ({
    category,
    totalSpent,
  }));

  return result;
}

module.exports = calculateTotalSpentByCategory;
