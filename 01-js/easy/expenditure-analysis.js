/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

function calculateTotalSpentByCategory(transactions) {
  const obj = {};
  const result = [];
  for (let i = 0; i < transactions.length; i++) {
    if (obj[transactions[i].category]) {
      obj[transactions[i].category] += transactions[i].price;
    } else {
      obj[transactions[i].category] = transactions[i].price;
    }
  }
  const entriesArr = Object.entries(obj);
  for (let i = 0; i < entriesArr.length; i++) {
    result.push({ category: entriesArr[i][0], totalSpent: entriesArr[i][1] });
  }
  console.log(entriesArr, "entriesArr");
  return result;
}

module.exports = calculateTotalSpentByCategory;
