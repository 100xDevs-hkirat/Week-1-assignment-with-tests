/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

function calculateTotalSpentByCategory(transactions) {
  const totalSpentOnCategory= {};
  for(const transaction of transactions){
    const {category ,price} = transaction
  }
  if(totalSpentOnCategory[category]){
    totalSpentOnCategory[category] += price
  }else{
    totalSpentOnCategory[category] = price
  }

  const result = [];

  for(const category in totalSpentOnCategory ){
    result.push({[category] : totalSpentOnCategory[category] })
  }
  return result
}

module.exports = calculateTotalSpentByCategory;
