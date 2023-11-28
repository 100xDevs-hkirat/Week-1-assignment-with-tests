/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

function calculateTotalSpentByCategory(transactions) {
  var expenses = {};
  for (let i = 0; i < transactions.length; i++) {
    if (transactions[i].category in expenses) {
      expenses[transactions[i].category] =
        expenses[transactions[i].category] + transactions[i].price; //add to existing price of category transactions[i].category
    } else {
      expenses[transactions[i].category] = transactions[i].price; //add new category with price
    }
  }
  var ans = [];
  keys = Object.keys(expenses); //fetch all keys

  for (let i = 0; i < keys.length; i++) {
    ans.push({ category: keys[i], totalSpent: expenses[keys[i]] });
  }
  return ans;
}

module.exports = calculateTotalSpentByCategory;
