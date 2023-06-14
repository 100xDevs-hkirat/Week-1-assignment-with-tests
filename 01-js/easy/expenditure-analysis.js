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

  for (const transaction of transactions) {
    const { category, price } = transaction;
    if (category in categoryMap) {
      categoryMap[category].totalSpent += price;
    } else {
      categoryMap[category] = {"totalSpent": price};
    }
  }

  const result = Object.entries(categoryMap).map(([category, total]) => {
    return { [category]: total };
  });

  return result;
}


module.exports = calculateTotalSpentByCategory;
