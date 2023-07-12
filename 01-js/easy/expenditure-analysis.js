/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

function calculateTotalSpentByCategory(transactions) {
    
  let categoryArray = [];
  for (let i = 0; i < transactions.length; i++){
    categoryArray.push(transactions[i].category);
  }

  let uniqueCategoryArray = [...new Set(categoryArray)];

  let totalSpentCategoryWise = [];

  for ( let i = 0; i < uniqueCategoryArray.length; i++){
    let totalSpentOnCategory = 0;
    for (let j = 0; j < transactions.length; j++){
      if (transactions[j].category == uniqueCategoryArray[i])
      totalSpentOnCategory = totalSpentOnCategory + transactions[j].price;
    }
    totalSpentCategoryWise.push({category : uniqueCategoryArray[i] , totalSpent : totalSpentOnCategory});
  }
  return totalSpentCategoryWise;


}

module.exports = calculateTotalSpentByCategory;
