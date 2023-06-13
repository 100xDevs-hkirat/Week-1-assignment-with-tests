/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

function calculateTotalSpentByCategory(transactions) {
  var answer = [];

  for (const transaction of transactions) {
    const { category, price } = transaction;
    let objectWithCategory = answer.find(function(item){
        return item.category === category;
    })
    if (objectWithCategory) {
      objectWithCategory.totalSpent = parseInt(objectWithCategory.totalSpent) + parseInt(price);
    } else {
      objectWithCategory = new Object();
      objectWithCategory.category = transaction.category;
      objectWithCategory.totalSpent = transaction.price;
      answer.push(objectWithCategory);
    }
  }

  return answer;
}

module.exports = calculateTotalSpentByCategory;
