/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

function calculateTotalSpentByCategory(transactions) {
  const temp = {}
  for(let i=0;i<transactions.length;i++) {
    if(temp[transactions[i].category]) {
      temp[transactions[i].category] = temp[transactions[i].category] + transactions[i].price 
    }
    else 
      temp[transactions[i].category] = transactions[i].price
  }
  const ans = []
  var w = Object.keys(temp)
  for(let i=0;i<w.length;i++) {
    let tempObject = {
      category: w[i],
      totalSpent: temp[w[i]]
    }
    ans.push(tempObject)
  }
  
  return ans;
}

module.exports = calculateTotalSpentByCategory;
