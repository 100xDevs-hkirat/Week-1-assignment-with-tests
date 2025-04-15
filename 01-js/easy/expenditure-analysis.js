/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

function calculateTotalSpentByCategory(transactions) {
  const categoryTotals = {}

  transactions.forEach(transaction => {
    const { category, price } = transaction;
    
    if (categoryTotals.hasOwnProperty(category)) {
      categoryTotals[category] += price;
    } else {
      categoryTotals[category] = price;
    }
  });

  const final_result = []
  var i = 1

  for (const category in categoryTotals){
    
    final_result.push({category : category, totalSpent : categoryTotals[category]})
    i++
  }

  return final_result
}

const transactions = [
  { itemName: "Item 1", category: "Books", price: 20, timestamp: "2023-06-12" },
  { itemName: "Item 2", category: "Electronics", price: 50, timestamp: "2023-06-12" },
  { itemName: "Item 3", category: "Books", price: 15, timestamp: "2023-06-12" },
  { itemName: "Item 4", category: "Electronics", price: 30, timestamp: "2023-06-12" },
  { itemName: "Item 5", category: "Books", price: 10, timestamp: "2023-06-12" }
];

calculateTotalSpentByCategory(transactions)

module.exports = calculateTotalSpentByCategory;
