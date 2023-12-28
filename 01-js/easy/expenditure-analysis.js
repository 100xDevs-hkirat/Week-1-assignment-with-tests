/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

function calculateTotalSpentByCategory(transactions) {
  var cat = {};
  for (let i = 0; i < transactions.length; i++) {
    var t = transactions[i];
    if (cat[t.category]) {
      cat[t.category] += t.price;
    } else {
      cat[t.category] = t.price;
    }
  }
  var keys = Object.keys(cat);
  let ans = [];
  for (var j = 0; j < keys.length; j++) {
    var category = keys[j];
    var obj = {
      category: category,
      totalSpent: cat[category],
    };
    ans.push(obj);
  }
  console.log(ans);
  return ans;
}

module.exports = calculateTotalSpentByCategory;
