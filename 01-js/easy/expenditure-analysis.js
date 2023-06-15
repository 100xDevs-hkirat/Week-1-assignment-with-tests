/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

function calculateTotalSpentByCategory(transactions) {
  var categoryMap = {};

  // Iterate over each transaction
  transactions.forEach(function(transaction) {
    var category = transaction.category;
    var price = transaction.price;

    // Check if the category exists in the map
    if (categoryMap.hasOwnProperty(category)) {
      // Increment the total price spent for the category
      categoryMap[category] += price;
    } else {
      // Initialize the category with the price spent
      categoryMap[category] = price;
    }
  });

  // Convert the category map to an array of objects
  var result = Object.keys(categoryMap).map(function(category) {
    var totalSpent = categoryMap[category];
    var categoryObject = {};
    categoryObject["category"] = category;
    categoryObject["totalSpent"]=totalSpent;
    return categoryObject;
  });

  return result;
}

module.exports = calculateTotalSpentByCategory;


