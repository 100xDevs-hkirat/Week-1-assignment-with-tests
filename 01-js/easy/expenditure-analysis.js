/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

function calculateTotalSpentByCategory(transactions) {
  
  let categorywise_amount_spent = new Map();

  for (let transaction of transactions) {
    if (categorywise_amount_spent.has(transaction.category))
      categorywise_amount_spent.set(
        transaction.category,
        categorywise_amount_spent.get(transaction.category) + transaction.price
      );
    else categorywise_amount_spent.set(transaction.category, transaction.price);
  }

  let ans;
  ans = Array.from(categorywise_amount_spent).reduce(
    (accumulator, currentValue) => [
      ...accumulator,
      { category: currentValue[0], totalSpent: currentValue[1] },
    ],
    []
  );
  return ans;
}

module.exports = calculateTotalSpentByCategory;
