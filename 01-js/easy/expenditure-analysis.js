/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

transactions = [
  {
    item: "pepsi",
    category: "Drink",
    price: 20,
    timestamp: "24-sep-2023",
  },
  {
    item: "cocola",
    category: "Drink",
    price: 25,
    timestamp: "21-sep-2023",
  },
  {
    item: "Burger",
    category: "Food",
    price: 100,
    timestamp: "2-sep-2023",
  },
  {
    item: "Detergint",
    category: "Cleaning",
    price: 150,
    timestamp: "1-sep-2023",
  },
  {
    item: "Detergint",
    category: "Cleaning",
    price: 1000,
    timestamp: "1-sep-2023",
  },
];

// the output which we want
// [
//   {
//     Category:"drink",
//     spent : 45
//   }
//   {
//     Category:"Food",
//     spent : 100
//   }
//   {
//     Category:"Cleaning",
//     spent : 150
//   }
// ]

function calculateTotalSpentByCategory(transactions) {
  let spendEstimates = {};
  for (let i = 0; i < transactions.length; i++) {
    let t = transactions[i];
    if (t.category in spendEstimates) {
      spendEstimates[t.category] = spendEstimates[t.category] + t.price;
    } else {
      spendEstimates[t.category] = t.price;
    }
  }

  let keys = Object.keys(spendEstimates);
  var answer = [];
  for (let i = 0; i < keys.length; i++) {
    let category = keys[i];
    let obj = {
      category: category,
      amountSpend: spendEstimates[category],
    };
    answer.push(obj);
  }
  return answer;
}
console.log(calculateTotalSpentByCategory(transactions));
module.exports = calculateTotalSpentByCategory;
