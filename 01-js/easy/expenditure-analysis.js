/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

function calculateTotalSpentByCategory(transactions) {
  let result = [];
  let categorySet = new Set();
  for (let transaction of transactions) {
    let { category, price } = transaction;
    if (categorySet.has(category)) {
      result.forEach(item => {
        if (item.category === category) {
          item.totalSpent += price;
        }
      })
    } else {
      categorySet.add(category);
      let obj = {};
      obj.category = category;
      obj.totalSpent = price;
      result.push(obj);
    }
  }
  return result;
}

const transactions = [
  {
    id: 1,
    timestamp: 1656076800000,
    price: 10,
    category: 'Food',
    itemName: 'Pizza',
  },
];

console.log(calculateTotalSpentByCategory(transactions));
module.exports = calculateTotalSpentByCategory;
