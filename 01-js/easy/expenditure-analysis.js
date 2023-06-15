/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

 //function to return list of unique category from transaction
function uniqlist(transaction){
let ul = []
for (let i = 0; i < transaction.length; i++) {
  if (!ul.includes(transaction[i].category)) {
    ul.push(transaction[i].category);
  }
}
return ul
}

// function to calculate TotalSpent By Category 

function calculateTotalSpentByCategory(transaction){
  uniqlist = uniqlist(t)
let list = []
for(let j=0;j<uniqlist.length;j++){
  
let obj = {}
  
let count = 0
  
for(let k=0;k<t.length;k++){
  if (t[k].category === uniqlist[j]){
     count = count + t[k].price
  }
} 
   obj['category'] = uniqlist[j]
   obj['totalSpent'] = count
  list.push(obj)
 }
  return list
}

module.exports = calculateTotalSpentByCategory;
