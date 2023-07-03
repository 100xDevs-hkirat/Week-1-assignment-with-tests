/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

function calculateTotalSpentByCategory(transactions) {
  let res={};
  transactions.forEach(element => {
       (typeof res[element.category]=== 'undefined')?res[element.category]=element.price:res[element.category]+=element.price;
       
  });
  let output=[];
  for(let key in res){
    output.push({"category":key,"totalSpent":res[key]})
  }
  return output;
}

module.exports = calculateTotalSpentByCategory;
