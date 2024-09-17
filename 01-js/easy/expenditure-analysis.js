/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

function calculateTotalSpentByCategory(transactions) {

  ans = [];
  spendDict = {}

  for(let item=0; item<transactions.length; item++){
    
    if(spendDict[transactions[item].category]){
      spendDict[transactions[item].category] = spendDict[transactions[item].category] + transactions[item].price;
    }
    else{
      spendDict[transactions[item].category] = transactions[item].price;
    }

  }

  let keys = Object.keys(spendDict);

  for(let i=0; i<keys.length; i++){
    ans.push({
      "category": keys[i],
      "totalSpent": spendDict[keys[i]]
    })
  }

  return ans;
}

module.exports = calculateTotalSpentByCategory;
