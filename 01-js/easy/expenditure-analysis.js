/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

let allTransactions = [
  {
    itemName: "camera",
    category: "electronics",
    price: 90000,
    timestamp: 1234334,
  },
  {
    itemName: "smart tv",
    category: "appliances",
    price: 16000,
    timestamp: 1234334,
  },
  {
    itemName: "laptop",
    category: "electronics",
    price: 62000,
    timestamp: 12335634,
  },
  {
    itemName: "oneplus",
    category: "mobiles",
    price: 52000,
    timestamp: 1237334,
  },
  {
    itemName: "washing machine",
    category: "appliances",
    price: 16000,
    timestamp: 1294334,
  },
];

function calculateTotalSpentByCategory(transactions) {
  let obj = {};

  for (let i = 0; i < transactions.length; i++) {
    if (obj[transactions[i].category]) {
      obj[transactions[i].category] += transactions[i].price;
    } else {
      obj[transactions[i].category] = transactions[i].price;
    }
  }
  let keys = Object.keys(obj);
  let answer = [];
  for (let i = 0; i < keys.length; i++) {
    let category = keys[i];
    answer.push({ category: category, totalSpent: obj[category] });
  }
  return answer;
}

let newArray = calculateTotalSpentByCategory(allTransactions);
console.log(newArray);
module.exports = calculateTotalSpentByCategory;
