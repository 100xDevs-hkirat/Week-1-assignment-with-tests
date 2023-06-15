/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

function calculateTotalSpentByCategory(transactions) {
  const objs = {};

  transactions.forEach((transactions) => {
    let { category, price } = transactions;

    if (objs.hasOwnProperty(category)) {
      objs[category].totalSpent += price;
    } else {
      objs[category] = {
        category: category,
        totalSpent: price,
      };
    }
  });

  const result = [];
  for (let obj in objs) {
    result.push(objs[obj]);
  }

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

const solve = calculateTotalSpentByCategory(transactions);
console.log(solve);

module.exports = calculateTotalSpentByCategory;
