/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

function calculateTotalSpentByCategory(transactions) {
  let arr = [];
  let k = 0;
  for(let i = 0;i<transactions.length;i++){
    if(transactions[i].category != ""){
    arr[k] = {category: transactions[i].category, totalSpent: transactions[i].price};
    for(let j = i+1;j<transactions.length;j++){
      if(transactions[i].category == transactions[j].category){
        arr[k].totalSpent+=transactions[j].price;
        transactions[j].category = "";
      }
    }
    k++;
  }
  }
  return arr;
}

module.exports = calculateTotalSpentByCategory;
