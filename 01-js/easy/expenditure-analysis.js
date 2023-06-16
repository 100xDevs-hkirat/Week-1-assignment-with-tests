/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

function calculateTotalSpentByCategory(transactions) {
  let categoryMap = new Map();
  let result = [];

  for (transaction of transactions) {

    if (categoryMap.has(transaction.category)) {
      categoryMap.set(transaction.category, categoryMap.get(transaction.category) + transaction.price);
    } else {
      categoryMap.set(transaction.category, transaction.price);
    }
  }

  // Iterate over the map and create the resultant array
  for (let [key, value] of categoryMap.entries()) {
    result.push({category: key, totalSpent: value});
  }

  return result;
}

module.exports = calculateTotalSpentByCategory;

const transactions = [
  {
    id: 1,
    timestamp: 1656076800000,
    price: 10,
    category: 'Food',
    itemName: 'Pizza',
  },
  {
    id: 2,
    timestamp: 1656105600000,
    price: 20,
    category: 'Food',
    itemName: 'Burger',
  },
  {
    id: 3,
    timestamp: 1656134400000,
    price: 30,
    category: 'Food',
    itemName: 'Sushi',
  },
];
calculateTotalSpentByCategory(transactions);