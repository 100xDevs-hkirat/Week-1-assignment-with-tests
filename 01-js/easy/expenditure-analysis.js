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
  

  for(let item=0; item<transactions.length; item++){
    console.log(transactions[item]);

  }

  return [];
}

const transactions = [
  {
    id: 1,
    timestamp: 1656076800000,
    price: 10,
    category: 'Food',
    itemName: 'Pizza',
  },
  {
    id: 2,
    timestamp: 1656076800000,
    price: 100,
    category: 'Food',
    itemName: 'Pizza',
  },
  {
    id: 3,
    timestamp: 1656076800000,
    price: 210,
    category: 'Clothes',
    itemName: 'Pizza',
  }]

calculateTotalSpentByCategory(transactions);

module.exports = calculateTotalSpentByCategory;
