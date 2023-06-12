/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

/* 				id: 1,
timestamp: 1656076800000,
price: 10,
category: 'Food',
itemName: 'Pizza',
*/

function calculateTotalSpentByCategory(transactions) {
  let totalByCategory={}

  for(let transaction of transactions){
    const category=transaction['category'];
    if(totalByCategory.hasOwnProperty(category)){
      totalByCategory[category]+=transaction['price'];
    }else{
      totalByCategory[category]=transaction['price'];
    }
  }


  const result=Object.keys(totalByCategory).map((key)=>({'category':key,'totalSpent':totalByCategory[key]}));


  return result;
}


module.exports = calculateTotalSpentByCategory;
