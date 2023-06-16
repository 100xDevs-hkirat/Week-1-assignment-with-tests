/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

function calculateTotalSpentByCategory(transactions) {
  let t={};
  for(let i=0;i<transactions.length;i++)
  {
    let transaction=transactions[i];
    let category=transaction.category;
    let price= transaction.price;
    if(t[category]){
      t[category]+=price;
    }
  else
    t[category]=price;
  }
  let res= Object.keys(t).map(function (category){
    return { "category": category, "totalSpent": t[category]};
  });
  return res;

}

module.exports = calculateTotalSpentByCategory;
