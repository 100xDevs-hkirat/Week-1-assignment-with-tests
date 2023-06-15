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
      categoryMap[category] += price;
    } else {
      categoryMap[category] = price;
    }
  }

  // Convert the categoryMap into an array of objects
  const result = Object.entries(categoryMap).map(([category, total]) => ({
    [category]: total,
  }));

  return result;
}

calculateTotalSpentByCategory([
  { itemName: "name1", category: "Food", price: 24, timestamp: "some time" },
  { itemName: "name2", category: "Dress", price: 28, timestamp: "some time" },
  { itemName: "name3", category: "Food", price: 90, timestamp: "some time" },
  {
    itemName: "name4",
    category: "Stationary",
    price: 45,
    timestamp: "some time",
  },
  { itemName: "name5", category: "Others", price: 77, timestamp: "some time" },
]);

module.exports = calculateTotalSpentByCategory;
