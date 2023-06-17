/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/



function calculateTotalSpentByCategory(transactions) {
  const categoryTotals = {};
  result = [];
  for(var i = 0; i<transactions.length; i++) {
    if(transactions[i].category in categoryTotals) {
      categoryTotals[transactions[i].category] += transactions[i].price;
    }
    else {
      categoryTotals[transactions[i].category] = transactions[i].price;
    }
    
  }

  for(var category in categoryTotals) {
    var expense = {"category":category, "totalSpent":categoryTotals[category]};
    result.push(expense);
  }
  
  return result;
}

module.exports = calculateTotalSpentByCategory;
