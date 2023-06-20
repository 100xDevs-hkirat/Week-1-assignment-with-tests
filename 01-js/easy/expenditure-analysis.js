/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

function calculateTotalSpentByCategory(transactions) {
  if(transactions.length === 0) return [];
  let map = {};

  for(let i = 0; i < transactions.length; i++) {
    if(map[transactions[i].category]) map[transactions[i].category] += transactions[i].price;
    else map[transactions[i].category] = transactions[i].price;
  }

  let res = [];

  let categories = Object.keys(map);

  for(let j= 0; j < categories.length; j++) {
    let entry = {"category": categories[j], "totalSpent": map[categories[j]]}
    res.push(entry);
  }

  return res;
}

module.exports = calculateTotalSpentByCategory;
