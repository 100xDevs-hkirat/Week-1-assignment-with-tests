/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

function calculateTotalSpentByCategory(transactions) {
  let total_spent_list = [];
  let total_spent_category = {};
  for(i=0; i< transactions.length; i++){
    let category = transactions[i].category;
    let money_spent = transactions[i].price;
    if (total_spent_category.hasOwnProperty(category)){
      total_spent_category[category] += money_spent;
    } else { 
      total_spent_category[category] = money_spent;
    }
  }
  for(let category in total_spent_category){
    let obj = {
      "category": category,
      "totalSpent": total_spent_category[category]
    }
    total_spent_list.push(obj);
  }
  return total_spent_list;
}




module.exports = calculateTotalSpentByCategory;
