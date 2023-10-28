/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

function calculateTotalSpentByCategory(transactions) {
  var arr = [];
  var categories = {};

  for(var i = 0;i<transactions.length;i++) {
    if(categories[transactions[i].category]) {
    categories[transactions[i].category]+=transactions[i].price
    }
    else {
      categories[transactions[i].category]=transactions[i].price
    }
  }

  for(const key in categories) {
    arr.push({category: key, totalSpent: categories[key]});
  }
  return arr;
}

transactions = [
  {itemName: "pepsi", category: "juice", price: 100, timestamp: "22"},
  {itemName: "coke", category: "juice", price: 100, timestamp: "22"},
  {itemName: "tropicana", category: "juice", price: 100, timestamp: "22"},
  {itemName: "kurkure", category: "snack", price: 100, timestamp: "22"},
  {itemName: "lays", category: "snack", price: 100, timestamp: "22"},
];

//console.log(calculateTotalSpentByCategory(transactions));

module.exports = calculateTotalSpentByCategory;
