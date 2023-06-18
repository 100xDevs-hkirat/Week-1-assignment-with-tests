/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

function calculateTotalSpentByCategory(transactions) {
  let filteredTransactions = transactions.map((transaction) => ({
    category: transaction.category,
    price: transaction.price
  }));

  let ansObj = {};
  for (let i = 0; i < transactions.length; i++) {
    let x = filteredTransactions[i];
    if (ansObj.hasOwnProperty(x.category)) {
      ansObj[x.category] += x.price;
    } else {
      ansObj[x.category] = x.price;
    }
  }

  let ansArr = [];
  let keys = Object.keys(ansObj);
  for (let i = 0; i < keys.length; i++) {
    ansArr.push({ category: keys[i], totalSpent: ansObj[keys[i]] });
  }

  return ansArr;
}



module.exports = calculateTotalSpentByCategory;
