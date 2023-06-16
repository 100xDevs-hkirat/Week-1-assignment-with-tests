/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

function doesCategoryExist(result, categoryToCheck){
  return result.find(item => item.category === categoryToCheck);

}

function calculateTotalSpentByCategory(transactions) {
  let result = []
  transactions.forEach(transaction => {
    let category = transaction.category;
    let categoryObj = doesCategoryExist(result, category)
    if (categoryObj==undefined) {
      categoryObj = {
        'category':category,
        'totalSpent':0
      }
      result.push(categoryObj);
    }
    categoryObj.totalSpent += transaction.price;
    
  });

  return result;
}

console.log(calculateTotalSpentByCategory([{ category: 'Food', price: 10 }, {category: 'Fruit', price: 10 }]))

module.exports = calculateTotalSpentByCategory;
