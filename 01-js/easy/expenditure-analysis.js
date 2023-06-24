/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

function calculateTotalSpentByCategory(transactions) {
  const itemAndSpent = {};
  const answer = [];
  for (let item of transactions) {
    if (itemAndSpent.hasOwnProperty(item.category)) {
      itemAndSpent[item.category] += item.price;
    } else {
      itemAndSpent[item.category] = item.price;
    }
  }
  for (let key in itemAndSpent) {
    let obj = {};
    obj["category"] = key;
    obj["totalSpent"] = itemAndSpent[key];
    answer.push(obj);
  }
  return answer;
}





module.exports = calculateTotalSpentByCategory;
