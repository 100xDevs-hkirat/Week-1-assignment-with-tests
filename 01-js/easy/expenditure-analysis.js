/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

function calculateTotalSpentByCategory(transactions) {
  const ans = {};
  for (let i = 0; i < transactions.length; i++) {
    const transaction = transactions[i];
    
    const { category,price } = transaction;
    // console.log( category, price)
    
    if (ans.hasOwnProperty(category)) {
      ans[category] += price;
      
    }
    else{
     ans[category]=price;
    }
  }
  const result = [];
  for (let key in ans){
    result.push({"category": key, "totalSpent": ans[key]});
  }
  return result;
}

module.exports = calculateTotalSpentByCategory;
