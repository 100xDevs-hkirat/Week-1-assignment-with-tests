/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

function calculateTotalSpentByCategory(transactions) {
  let n = transactions.length
  let mp = {}

  for (let i = 0; i < n; i++) {
    if (transactions[i].category in mp) {
      mp[transactions[i].category] += transactions[i].price
    } else {
      mp[transactions[i].category] = transactions[i].price
    }
  }

  let arr = []

  for (let key in mp) {
    let newObj = {
      category: key,
      totalSpent: mp[key],
    }
    arr.push(newObj)
  }

  return arr
}

module.exports = calculateTotalSpentByCategory
