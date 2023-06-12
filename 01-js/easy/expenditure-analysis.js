/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

function calculateTotalSpentByCategory(transactions) {
  const amountMap = [];
  for (const transaction of transactions) {
    const id = transaction.id;
    const timestamp = transaction.timestamp;
    const totalSpent = transaction.price;
    const category = transaction.category;
    const itemName = transaction.itemName;
    const ifCategoryExists = amountMap.find((obj) => obj.category === category);

    if (ifCategoryExists) {
      ifCategoryExists.totalSpent += totalSpent;
    } else {
      amountMap.push({ category, totalSpent });
    }
  }
  return amountMap;
}

module.exports = calculateTotalSpentByCategory;
