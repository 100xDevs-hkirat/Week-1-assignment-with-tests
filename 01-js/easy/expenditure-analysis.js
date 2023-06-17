/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
 
   object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

function calculateTotalSpentByCategory(transactions) {
  let empty = {};
  for (const i of transactions) {
    let category = i.category;
    let price = i.price;

    if (empty.hasOwnProperty(category)) {
      empty[category] += price;
    } else {
      empty[category] = price;
    }
  }

  let result = [];
  for (const category in empty) {
    result.push({ category: category, totalSpent: empty[category] });
  }
  return result;
}

module.exports = calculateTotalSpentByCategory;
