/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/
// const products = [
//   { category: 'Electronics', price: 1000 },
//   { category: 'Clothing', price: 50 },
//   { category: 'Electronics', price: 800 },
//   { category: 'Clothing', price: 30 },
//   { category: 'Furniture', price: 500 }
// ];

function calculateTotalSpentByCategory(item) {

  item= item.reduce((result, item) => {
    let category = item.category;

    if (!result[category]) {
      result[category] = 0
    }
    result[category]=result[category]+(item.price);
    return result;
  }, {});
  var result=[]
  for(let i in item){

    result.push({"category":i,"totalSpent":parseInt(item[i])});
  }
  return result
}
//console.log(calculateTotalSpentByCategory(products))

module.exports = calculateTotalSpentByCategory;
