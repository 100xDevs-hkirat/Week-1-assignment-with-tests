/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/
function implement(arr, category, price){
  let flag = false;
  for(let item of arr){
    for(let key in item){
      if(key === category){
        item[category]+=price;
        flag = true;
        break;
      }
    }
  }
  if(!flag){
    let obj = new Object();
    obj[category] = price;
    arr.push(obj);
  }
}

function calculateTotalSpentByCategory(transactions) {
  let arr = new Array();
  for(let key of transactions){
    implement(arr, key.category, key.price)
  }
  return arr;
}

module.exports = {
  calculateTotalSpentByCategory,
  implement 
};

