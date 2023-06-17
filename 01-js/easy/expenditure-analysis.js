/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

function calculateTotalSpentByCategory(transactions) {
  let categoryList = [];
  const obj = new Object();
  const uniqueCategories = new Set();

  transactions.forEach(element => {
       let categ = element.category;
       if(isNaN(obj[categ])) {
          obj[categ] = 0;
        }
        obj[categ] += element.price;
        uniqueCategories.add(categ);
  });
 
 uniqueCategories.forEach(element => {
    const categoryObject = new Object();
    categoryObject['category'] = element;
    categoryObject['totalSpent'] = obj[element];
    categoryList.push(categoryObject);
 });

 return categoryList;
}

module.exports = calculateTotalSpentByCategory;
