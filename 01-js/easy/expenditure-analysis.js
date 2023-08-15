/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

function calculateTotalSpentByCategory(transactions) {
  var result = {};
  for(var i = 0;i<transactions.length;i++){
    var t = transactions[i];
    if(result[t.category]){
      result[t.category]+=t.price;
    }else{
      result[t.category]=t.price
    }
  }
  var keys = Object.keys(result);
  
  
  var finalresult = [];
  for(var j = 0;j<keys.length;j++){
    var temp = keys[j];
    var obj = {
      category:temp,
      totalSpent:result[temp]
    }
    finalresult.push(obj);
  }return(finalresult);

  
  
}

module.exports = calculateTotalSpentByCategory;


