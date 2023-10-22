/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

function calculateTotalSpentByCategory(transactions) {
  const ans = [];
  for (let object in transactions) {
    ans[transactions[object].category] = 0;
  }
  for (let object in transactions) {
    ans[transactions[object].category] += transactions[object].price;
  }
  const fin=[];
  const nw=Object.entries(ans);
  for(let value in nw) {
    fin.push({category: nw[value][0], totalSpent: nw[value][1]});
    //console.log(value);
  }
  //console.log(nw);
  return fin;
}

module.exports = calculateTotalSpentByCategory;
