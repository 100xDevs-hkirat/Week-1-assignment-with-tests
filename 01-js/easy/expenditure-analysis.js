/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

function calculateTotalSpentByCategory(transactions) {
  let spendEstimates = {}
    for (let i = 0; i < transactions.length; i++) {
      let t = transactions[i];
      if (spendEstimates[t.category]) {
        spendEstimates[t.category] += t.price
      } else {
        spendEstimates[t.category] = t.price
      }
    }
    let key = Object.keys(spendEstimates)
    console.log(spendEstimates)
    console.log(key)
  
    let answer = []
    for (i = 0; i < key.length; i++) {
      category = key[i]
      let obj = {
        category: category,
        amountSpent: spendEstimates[category]
      }
      ans.push(obj)
    }
    console.log(ans)
  }
  
  
  let transactions = [
    {
      itemName: "sprite", 
      category: "Drink",
      price: 20,
      timestamp: "11-june",
    },
    {
      itemName: "pepsi",
      category: "Drink",
      price: 20,
      timestamp: "12-june",
    },
    {
      itemName: "sprite",
      category: "Food",
      price: 5,
      timestamp: "13-june",
    },
    {
      itemName: "chicken",
      category: "Food",
      price: 30,
      timestamp: "14-june",
    },
  ]
  
return answer()


module.exports = calculateTotalSpentByCategory;
