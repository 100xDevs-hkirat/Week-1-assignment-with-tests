/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

function calculateTotalSpentByCategory(transactions) {
  const categoryAll = {};

  for (let transaction of transactions) {
    const { category, price } = transaction;
    if (categoryAll.hasOwnProperty(category)) {
      categoryAll[category] += price;
    } else {
      categoryAll[category] = price;
    }
  }

  const result = Object.entries(categoryAll).map(([category, total]) => ({
    [category]: total,
  }));

  return result;
}
const transactions = [
  {
    itemName: "Item 1",
    category: "Electronics",
    price: 1000,
    timestamp: "2023-01-01",
  },
  {
    itemName: "Item 2",
    category: "Books",
    price: 500,
    timestamp: "2023-01-02",
  },
  {
    itemName: "Item 3",
    category: "Electronics",
    price: 1500,
    timestamp: "2023-01-03",
  },
  {
    itemName: "Item 4",
    category: "Books",
    price: 800,
    timestamp: "2023-01-04",
  },
  {
    itemName: "Item 5",
    category: "Electronics",
    price: 2000,
    timestamp: "2023-01-05",
  },
];

const print = calculateTotalSpentByCategory(transactions);
console.log(print);

module.exports = calculateTotalSpentByCategory;
