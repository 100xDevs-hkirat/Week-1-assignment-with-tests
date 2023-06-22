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




module.exports = calculateTotalSpentByCategory;
