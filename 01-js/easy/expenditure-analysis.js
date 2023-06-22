/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

function calculateTotalSpentByCategory(transactions) {
  let fin = {}
  let arr = []
  for(var i =0; i<transactions.length ; i++){
    if(fin[transactions[i].category]){
      fin[transactions[i].category] = fin[transactions[i].category]+ transactions[i].price
    }
    else{
      fin[transactions[i].category] = transactions[i].price
    }
  }
  var keys = Object.keys(fin)
  for(var element = 0; element<keys.length; element++) {
    var obj = {
      category : keys[element],
      totalSpent : fin[keys[element]]
    }
    arr.push(obj)
  }
  return arr;
}

module.exports = calculateTotalSpentByCategory;
