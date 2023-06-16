/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

function calculateTotalSpentByCategory(transactions) {
  let spentByCateogry = [];
  for (let i = 0; i < transactions.length; i++) {
    let transaction = transactions[i];

    console.log(transaction.category); // jsut to see every category
    // if category already exisiting in the spentByCategoryArray we just update the price int he exisitng array

    let existingCategory = spentByCateogry.find((item) => {
      return item.category === transaction.category;
    });
    if (existingCategory) {
      existingCategory.totalSpent += transaction.price;
    }
    //else add a new category to array with the initial value
    else {
      let newCategory = {
        category: transaction.category,
        totalSpent: transaction.price,
      };
      spentByCateogry.push(newCategory);
    }
  }
  return spentByCateogry;
}

module.exports = calculateTotalSpentByCategory;
