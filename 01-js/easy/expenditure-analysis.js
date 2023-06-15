/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

function calculateTotalSpentByCategory(transactions) {
    map = {}

  for(i = 0; i<transactions.length; i++){
    if(transactions[i].category in map){
      map[transactions[i].category] += transactions[i].price;
    }
    else{
      map[transactions[i].category] = transactions[i].price;
    }
  }

  arr = Object.entries(map) //converting object to an array
  result = arr.map(([category,totalSpent]) => ({category,totalSpent})); // mapping array elemts to desired object properties
  return result;
}

module.exports = calculateTotalSpentByCategory;
