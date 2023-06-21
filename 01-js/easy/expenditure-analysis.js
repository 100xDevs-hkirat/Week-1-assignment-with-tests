/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/


var transactions = [
  {
    itemName: "Maggi",
    category: "Food", 
    price: 20,
    timestamp: 22/2/2023
  },
  {
    itemName: "Limca",
    category: "Drink", 
    price: 200,
    timestamp: 22/2/2023
  },
  {
    itemName: "Oreo",
    category: "Food", 
    price: 60,
    timestamp: 22/2/2023
  }
]

function calculateTotalSpentByCategory(transactions) {
  let totalSpent = {};

  for(let i=0;i<transactions.length;i++){
    let t = transactions[i];
    if(totalSpent[t.category]){
      totalSpent[t.category] = totalSpent[t.category] + t.price ;
    }else{
      totalSpent[t.category] = t.price;
    }
  }

  let keys = Object.keys(totalSpent);

  let answer=[];

  for(let i=0;i<keys.length;i++){
    var category = keys[i];
    let obj={
      category: category,
      totalSpent: totalSpent[category]
    }
    answer.push(obj);
  }

  return answer;
}

module.exports = calculateTotalSpentByCategory;
