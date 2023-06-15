/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

function calculateTotalSpentByCategory(transactions) {
  object={};
  array=[];
  for (let i = 0; i < transactions.length; i++) {
    const element = transactions[i];
    const cat=element["category"];
    var price =element["price"];
    if(object[cat])
    object[cat]+=price;
    else
    object[cat]=price;
  }

for (const key in object) {
    var obj={
      "category":key,
      "totalSpent":object[key]
    }
    array.push(obj);
  }
  return array;
}

module.exports = calculateTotalSpentByCategory;
