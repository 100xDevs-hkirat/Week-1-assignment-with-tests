/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

function calculateTotalSpentByCategory(transactions) {
  list = [];
  transactions.forEach((item) => {
    let flag = false;
    for (var i = 0; i < list.length; i++) {
      if (list[i].category === item.category) {
        flag = true;
        break;
      }
    }
    if (flag) list[i].totalSpent += item.price;
    else {
      obj = {
        category: item.category,
        totalSpent: item.price,
      };
      list.push(obj);
    }
  });
  return list;
}

module.exports = calculateTotalSpentByCategory;
