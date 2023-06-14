/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

function calculateTotalSpentByCategory(transactions) {
  
  for(let x in transactions){
    var solution = []
    for(let y in solution){
      if (solution[y].category == transactions[x].category){
        solution[y].totalSpent = solution.totalSpent + transactions.x.price;
      }
    }
        solution.category = transactions.x.category
        solution.totalSpent =  transactions.x.price;
    
  }
  return solution;
}

module.exports = calculateTotalSpentByCategory;
