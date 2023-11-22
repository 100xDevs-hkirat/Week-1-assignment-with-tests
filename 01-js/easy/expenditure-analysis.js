/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

function calculateTotalSpentByCategory(transactions) {
  const output={};
  transactions.forEach((e)=>{
  if(output[e.category]){
    output[e.category]+=e.price;
    
  }else{
    output[e.category]=e.price;
  }
  })

  const finalOutput=[];
  var keys=Object.keys(output);
  keys.forEach((e)=>{
      finalOutput.push({
        category:e,
        totalSpent:output[e]
      })
  })

  return finalOutput;
}

module.exports = calculateTotalSpentByCategory;
