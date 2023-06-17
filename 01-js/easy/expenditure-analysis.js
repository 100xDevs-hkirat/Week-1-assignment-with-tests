/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

function calculateTotalSpentByCategory(transactions) {

  let total = {};

// forEach(function()) + arrow fn without parentheses
  transactions.forEach( transactions => {
    //destructuring
    let {category, price} = transactions;

    if(total.hasOwnProperty(category)){
      total[category] += price;
    }else{
      total[category] = price;
    }
  })

  
  let output = [];
  
  Object.keys(total).forEach(item => {
    output.push({ category: item, totalSpent: total[item] })
  })

 return output;
 
}


module.exports = calculateTotalSpentByCategory;
