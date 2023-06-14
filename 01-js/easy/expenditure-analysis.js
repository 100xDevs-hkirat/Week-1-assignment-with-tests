/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

function calculateTotalSpentByCategory(transactions) {
  let res = [];
  transactions.forEach((transaction) => {
    const inRes = res.findIndex((r) => {
      if (r.category === transaction.category) {
        r.totalSpent += transaction.price;
        return true;
      }
      return false;
    });
    if (inRes === -1) {
      res.push({
        category: transaction.category,
        totalSpent: transaction.price,
      });
    }
  });
  return res;
}


module.exports = calculateTotalSpentByCategory;
