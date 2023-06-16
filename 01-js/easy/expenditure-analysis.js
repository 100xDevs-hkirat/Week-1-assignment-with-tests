/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

function calculateTotalSpentByCategory(transactions) {

    var n = transactions.length;
      
    var ar = [];
    var mp = new Map();


    for(var i=0; i<n ; i++){
        if(!mp.has(transactions[i].category)){
            mp.set(transactions[i].category, transactions[i].price);
        }
        else{
            mp.set(transactions[i].category, mp.get(transactions[i].category) + transactions[i].price);
        }
    }

  let co=1;

  for(let [key, value] of mp){
    ar.push({
      ["category" ] : key,
      ["totalSpent"] : value
      });
      co++;
  }

  console.log(ar);
  return ar;
}

module.exports = calculateTotalSpentByCategory;
