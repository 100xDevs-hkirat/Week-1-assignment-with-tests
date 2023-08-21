/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/



function calculateTotalSpentByCategory(transactions) {
  var spendEstimates = {};
    for (var i = 0; i < transactions.length; i++) {
      let t = transactions[i];

    if (spendEstimates[t.category]) {
      spendEstimates[t.category] = spendEstimates[t.category] + t.price;
    }
    else {
      spendEstimates[t.category] = t.price;
    }

  }
  // console.log(spendEstimates)
  var a = Object.keys(spendEstimates)
  // console.log(a)

  let answer = [];
  for (let i = 0; i < a.length; i++) {
    let object = {
      category: a[i],
      totalSpent: spendEstimates[a[i]]
    }
    answer.push(object);
  }
  return answer;

  
}

module.exports = calculateTotalSpentByCategory;
