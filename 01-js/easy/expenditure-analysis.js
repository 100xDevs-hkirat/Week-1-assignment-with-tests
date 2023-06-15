/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

function calculateTotalSpentByCategory(transactions) {
  let categorised_transactions = [];

  transactions.forEach((transaction) => {
    trans_id = categorised_transactions.findIndex(
      (t) => t.category === transaction.category
    );
    if (trans_id != -1) {
      //console.log(trans_id);
      categorised_transactions[trans_id].totalSpent += transaction.price;
    } else {
      categorised_transactions.push({
        category: transaction.category,
        totalSpent: transaction.price,
      });
    }
  });

  return categorised_transactions;
}

module.exports = calculateTotalSpentByCategory;
