/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

function calculateTotalSpentByCategory(transactions) {
  let categories = [];



  for (let j = 0; j < transactions.length; j++) {
    let object = transactions[j];
    let exist = false;
    for (let i = 0; i < categories.length; i++) {

      if (categories[i].category === object.category) {
        categories[i].totalSpent += object.price
        exist = true;
        break;
      }
    }

    if (!exist) {
      let category = object.category;
      let totalSpent = object.price;
      categories.push({ category, totalSpent });
    }
  }

  console.log(categories)
  console.log(transactions)


  return categories;
}



module.exports = calculateTotalSpentByCategory;
