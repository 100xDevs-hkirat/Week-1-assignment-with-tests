/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

function calculateTotalSpentByCategory(transactions) {
  if (transactions.length == 0) {
  return []}
  else{
  var result = {};
  // var temp = [];
  for (let i = 0; i<transactions.length; i++){
   const transaction = transactions[i];
   const category = transaction.category;
   const price = transaction.price;
   if(category in result){
    result.totalSpent += price;
   } 
   else{
    result.category = category
    result.totalSpent = price;
   }
  }
  console.log(result);
  return result;
}
}

module.exports = calculateTotalSpentByCategory;
