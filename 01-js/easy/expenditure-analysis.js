/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

function calculateTotalSpentByCategory(transactions) {
  if (transactions.length === 0){
    return [];
  }

  let result = [];
  uniqueCategoriesObj = {};
  transactions.forEach(transaction => {
    if (uniqueCategoriesObj[transaction.category]){
      uniqueCategoriesObj[transaction.category] += transaction.price;
      return;
    }
    uniqueCategoriesObj[transaction.category] = transaction.price;
  });
  for (const category in uniqueCategoriesObj){
    result.push({ category:category ,totalSpent: uniqueCategoriesObj[category]});
  }

  return result;
}

module.exports = calculateTotalSpentByCategory;
