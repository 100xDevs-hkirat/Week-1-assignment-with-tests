/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

function calculateTotalSpentByCategory(transactions) {
  let Output = {}
  for (let i of transactions) {
    if (Output.hasOwnProperty(i.category)) Output[i.category] += i.price
    else Output[i.category] = i.price
  }
  let data = []
  for (let i in Output) {
    data.push({ category: i, totalSpent: Output[i] })
  }
  return data
}

module.exports = calculateTotalSpentByCategory;
