/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

function calculateTotalSpentByCategory(transactions) {
  const categorys={}
  for(const transaction of transactions){
        const {category,price}=transaction;
       if(categorys.hasOwnProperty(category)){
        categorys[category]+=price;
       }
       else{
        categorys[category]=price;
       }
  }
  const result=Object.keys(categorys).map((category)=>{
      return { category: category,totalSpent: categorys[category] }
  })
  return result;
}

module.exports = calculateTotalSpentByCategory;
