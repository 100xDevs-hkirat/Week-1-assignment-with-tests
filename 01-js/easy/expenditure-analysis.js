/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

function calculateTotalSpentByCategory(transactions) {
  const categoryTotals = {};

  // Iterate over transactions array
  transactions.forEach((item) => {
    const { category, price } = item;

    // Check if category exists in categoryTotals, initialize if not
    if (!categoryTotals.hasOwnProperty(category)) {
      categoryTotals[category] = 0;
    }

    // Add price to category total
    categoryTotals[category] += price;
  });

  // Create array of objects with distinct categories and total prices
  const answer = Object.entries(categoryTotals).map(
    ([category, totalSpent]) => ({
      category,
      totalSpent,
    })
  );
  return answer;
}

module.exports = calculateTotalSpentByCategory;
