/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

function calculateTotalSpentByCategory(transactions) {
  let mp = new Map();

  for(let x of transactions){
    if(mp.has(x.category)){
      let value = mp.get(x.category);
      mp.set(x.category, value+x.price);
    }
    else{
      mp.set(x.category, x.price);
    }
  }
  let res = Array.from(mp, ([category, totalSpent]) => ({category, totalSpent}));
  return res;
}

module.exports = calculateTotalSpentByCategory;
