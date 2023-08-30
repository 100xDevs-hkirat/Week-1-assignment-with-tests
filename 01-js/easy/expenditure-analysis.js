/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

function calculateTotalSpentByCategory(transactions) {
  let newObj = {};

  for (var i = 0; i < transactions.length; i++) {
    let curntObj = transactions[i];

    if (newObj[curntObj.category]) {
      newObj[curntObj.category] = newObj[curntObj.category] + curntObj.price;
    } else {
      newObj[curntObj.category] = curntObj.price;
    }
  }
  // console.log(newObj);

  let newArray = [];

  let arrayOfKeys = Object.keys(newObj);

  for (var i = 0; i < arrayOfKeys.length; i++) {
    var finalObj = {
      category: arrayOfKeys[i],
      totalSpent: newObj[arrayOfKeys[i]],
    };

    newArray.push(finalObj);
  }

  return newArray;
}

module.exports = calculateTotalSpentByCategory;
