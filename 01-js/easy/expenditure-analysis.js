/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

function calculateTotalSpentByCategory(transactions) {

  var obj = {};

  for(var i=0;i<transactions.length;i++){
    var t = transactions[i];
    if(obj[t.category])
      obj[t.category] = obj[t.category] + t.price;
    else
      obj[t.category] = t.price;
  }


  var ans = [];
  var first = Object.keys(obj);
  for(var i=0;i<first.length;i++){
    var nobj = {
        category: first[i],
        totalSpent: obj[first[i]]
    }
    ans.push(nobj);
  }

  return ans;
}

module.exports = calculateTotalSpentByCategory;
