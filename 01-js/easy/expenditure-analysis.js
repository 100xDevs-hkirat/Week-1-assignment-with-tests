/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

function calculateTotalSpentByCategory(transactions) {

  var map = new Map();
  const list= [];
  
  for(var i=0;i<transactions.length;i++)
  {
    if(map.has(transactions[i].category))
    {
      // exisitng
      var price = map.get(transactions[i].category);
      map.set(transactions[i].category, price + transactions[i].totalSpent);
    }
    else 
    {
      map.set(transactions[i].category, transactions[i].totalSpent);
    }
  }

  map.forEach((value,key)=>{
    list.push({key.},{value});
  })

  console.log(list);

  return list;
}

calculateTotalSpentByCategory( [{"category": "Food", "totalSpent": 30}, {"category": "Clothing", "totalSpent": 40}, {"category": "Electronics", "totalSpent": 30}]);

module.exports = calculateTotalSpentByCategory;
