/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

function calculateTotalSpentByCategory(transactions) {
  let ans = {};
  for (let i = 0; i < transactions.length; i++) {
    let t = transactions[i];
    if (ans[t.category]) {
      ans[t.category] = ans[t.category] + t.price
    }
    else {
      ans[t.category] = t.price
    }
  }
  var keys = Object.keys(ans)
  var final = []
  for (var i = 0; i < keys.length; i++) {
    var category = keys[i]
    var obj = {
      category: category,
      totalSpent: ans[category]
    }
    final.push(obj)
  }
  return final;
}

var transactions = [
  {
    itemName: "Chocolate",
    category: "food",
    price: 12,
    timestamp: "12-june-2023"
  },

  {
    itemName: "Samosa",
    category: "food",
    price: 90,
    timestamp: "2-june-2023"
  },

  {
    itemName: "Real",
    category: "drink",
    price: 12,
    timestamp: "18-june-2023"
  },

  {
    itemName: "Beer",
    category: "drink",
    price: 80,
    timestamp: "1-june-2023"
  }

]

calculateTotalSpentByCategory(transactions);

module.exports = calculateTotalSpentByCategory;
