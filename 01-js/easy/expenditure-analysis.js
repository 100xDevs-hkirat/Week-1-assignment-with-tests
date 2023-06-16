/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

function calculateTotalSpentByCategory(transactions) {
  const len=transactions.length;
  var arr=[];
  for(var i=0;i<len;i++){
    var obj={};
    obj.category=transactions[i].category;
    obj.totalSpent=transactions[i].price;
    var c=0;
    for(var j=0; j < arr.length;j++){
      if(arr[j].category===obj.category){
        arr[j].totalSpent+=obj.totalSpent;
        break;
      }
      c++;
    }
    if(c===arr.length){
      arr.push(obj);
    }
  }
  return arr;
}

module.exports = calculateTotalSpentByCategory;
