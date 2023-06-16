/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

function calculateTotalSpentByCategory(transactions) {
  var outputArr = [];
  if(transactions.length === 0)return outputArr;
  const categoryToPrice = new Map();
  for (var i = 0; i < transactions.length; i++) {
    var obj = transactions[i];
    if (categoryToPrice.has(obj.category)) {
      var count = categoryToPrice.get(obj.category);
      categoryToPrice.set(obj.category, count + obj.price);
    } else {
      categoryToPrice.set(obj.category, obj.price);
    }
  }
  categoryToPrice.forEach((value,key) => {
    const obj = {"category": key , "totalSpent": value};
    outputArr.push(obj);
  })
  return outputArr;
}

module.exports = calculateTotalSpentByCategory;
