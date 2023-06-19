/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

function calculateTotalSpentByCategory(transactions) {

  var categories = new Set();

  for (let i = 0; i < transactions.length; i++){
    if (!(transactions[i].category in categories)){
      categories.add(transactions[i].category);
    }
  }
  var categories = Array.from(categories);
  var output = [];
  for (let i = 0; i < categories.length; i++){
    var category = categories[i];
    var price = 0
    var obj = {}
    for (let j = 0; j < transactions.length; j++){
      if (transactions[j].category === category){
        price += transactions[j].price;
      }
    }
    obj["category"] = category;
    obj["totalSpent"] = price;
    output.push(obj)
  }
  return output;
  
}

module.exports = calculateTotalSpentByCategory;
