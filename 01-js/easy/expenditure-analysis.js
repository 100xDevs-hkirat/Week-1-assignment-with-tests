/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

/**
 * 
 * @param {Array<{id:number,timestamp:number,price:number,category:string,itemName:string}>} transactions 
 * @returns {Array<{category:string,totalSpent:number}>}
 */
function calculateTotalSpentByCategory(transactions) {
  let categoryWise = {};

  transactions.map((transaction)=>{
    if(categoryWise[transaction.category]) {
      categoryWise[transaction.category] += transaction.price;
    }else {
      categoryWise[transaction.category] = transaction.price;
    }
  });

  return Object.keys(categoryWise).map(key => ({
    category: key,
    totalSpent: categoryWise[key]
  }));
}

module.exports = calculateTotalSpentByCategory;
