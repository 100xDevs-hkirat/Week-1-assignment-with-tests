/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

function calculateTotalSpentByCategory(transactions) {
  let expenditureByCategory = {};
  let result = []
  
  transactions.forEach((transaction) => {
    if (transaction.category in expenditureByCategory) {
      expenditureByCategory[transaction.category] += transaction.price;
    } else {
      expenditureByCategory[transaction.category] = transaction.price;
    }
  });

  Object.keys(expenditureByCategory).forEach((key) => {
    let expense = { category: key, totalSpent: expenditureByCategory[key] };

    result.push(expense);
  })

  return result;
}

module.exports = calculateTotalSpentByCategory;
