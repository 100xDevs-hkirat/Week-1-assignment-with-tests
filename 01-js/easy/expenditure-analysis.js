/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

function calculateTotalSpentByCategory(transactions) {
  let fmap = new Map();

  for(let trans of transactions)
  {
    var category = trans.category;
    var price = trans.price;

    if(fmap.has(trans.category))
    {
      var totalSpent = fmap.get(category);
      fmap.set(category, totalSpent + price)
    }
    else
    {
      fmap.set(category, price);
    }
  }
  
  let ans = [];
   for(let [key, value] of fmap)
   {
     var obj={
      category : key,
      totalSpent : value
     }
     ans.push(obj);
   }
   return ans;
}

module.exports = calculateTotalSpentByCategory;
