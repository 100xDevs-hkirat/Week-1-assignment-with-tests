/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

function calculateTotalSpentByCategory(transactions) {
  let arr = [];
  let obj = {};
  for (const tran of transactions) {
    if (obj[tran["category"]]) {
      obj[tran["category"]] += tran["price"];
    } else {
      obj[tran["category"]] = tran["price"];
    }
  }
  for (const [key, value] of Object.entries(obj)) {
    arr.push({ category: key, totalSpent: value });
  }
  return arr;
}

let transactions = [
  {
    id: 1,
    itemName: "SmartPhone",
    category: "Technology",
    price: 30000,
    timestamp: "7686976968",
  },
  {
    id: 2,
    itemName: "T-Shirt",
    category: "Clothes",
    price: 1099,
    timestamp: "5795678757",
  },
  {
    id: 3,
    itemName: "Himalaya-FaceWash",
    category: "Skin-Care",
    price: 399,
    timestamp: "7876897668",
  },
  {
    id: 4,
    itemName: "Cooker-5L",
    category: "Kitchen",
    price: 3999,
    timestamp: "7678968680",
  },
  {
    id: 5,
    itemName: "EarPhone-Bluetooth",
    category: "Sound",
    price: 2599,
    timestamp: "7687969689",
  },
  {
    id: 3,
    itemName: "Himalaya-FaceWash",
    category: "Skin-Care",
    price: 9000,
    timestamp: "7876897668",
  },
];
const totalSpentByCategory = calculateTotalSpentByCategory(transactions);
console.log(totalSpentByCategory);

module.exports = calculateTotalSpentByCategory;
