/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

function calculateTotalSpentByCategory(transactions) {
  let length=transactions.length; var output=[];var object={};var cate=[];
  for (let i = 0; i < transactions.length; i++) {
    cate.push(transactions[i].category);
  }
  var distinct=[...new Set(cate)];

  for (let j = 0; j < distinct.length; j++) {
  var cat=distinct[j];var a=0;
  for (let i = 0; i < transactions.length; i++) {
    if (transactions[i].category===cat) {
      a+=transactions[i].price;
    }
    
  }
  var pp={
    category:cat,
    totalSpent:a
  }
  output.push(pp);
 }
  return output;
}

module.exports = calculateTotalSpentByCategory;
 