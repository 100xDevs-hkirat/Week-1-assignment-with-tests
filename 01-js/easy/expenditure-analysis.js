/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

function calculateTotalSpentByCategory(transactions) {

  return transactions.reduce((output,element)=>{
      let index = output.findIndex(x=>x.category===element.category);
      if(index === -1){
        output.push({category:element.category,totalSpent:element.price});
      }
      else{
        output[index].totalSpent +=  element.price;
      }
      return output;
  },[]);
  
}

module.exports = calculateTotalSpentByCategory;
