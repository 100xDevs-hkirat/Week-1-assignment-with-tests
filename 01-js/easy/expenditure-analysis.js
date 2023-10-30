/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

function calculateTotalSpentByCategory(transactions) {
  // console.log(transactions.length);
  const categoryTotals = {};

  // Iterate through the transactions
  for (let i = 0; i < transactions.length; i++) {
    const transaction = transactions[i];
    const category = transaction.category;
    const price = transaction.price;

    // If the category doesn't exist in the categoryTotals object, create it
    if (!categoryTotals[category]) {
      categoryTotals[category] = 0;
    }

    // Add the price to the total spending for the category
    categoryTotals[category] += price;
  }

  // Convert the categoryTotals object into an array of objects
  const result = [];
  for (const category in categoryTotals) {
    // result.push({ [category]: categoryTotals[category] });
    result.push({
      category: category,
      totalSpent: categoryTotals[category],
    });
  }

  return result;
}

module.exports = calculateTotalSpentByCategory;
