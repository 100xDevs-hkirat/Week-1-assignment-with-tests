/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
 
   object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

/* let categoryMap = {};

  // Calculate total spent for each category
  for (let transaction of transactions) {
    let category = transaction.category;
    let price = transaction.price;

    // If the category is already present in the categoryMap, add the price to the existing total
    if (categoryMap.hasOwnProperty(category)) {
      categoryMap[category] += price;
    } else {
      // If the category is not present, initialize it with the price
      categoryMap[category] = price;
    }
  }

  // Convert the categoryMap to an array of objects in the desired format
  let result = [];
  for (let category in categoryMap) {
    result.push({ category: category, totalSpent: categoryMap[category] });
  }

  return result;
}
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
