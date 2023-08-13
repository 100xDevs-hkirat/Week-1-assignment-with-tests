/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

function calculateTotalSpentByCategory(transactions) {

  let categorie = [];

  let result = [];

  for (let i=0; i<transactions.length; i++){
    if (!categorie.includes(transactions[i].category)){
      categorie.push(transactions[i].category);
      let newObject = {};
      newObject.category = transactions[i].category;
      newObject.totalSpent = transactions[i].price;
      result.push(newObject);
    }
    else{
      let index = search(transactions[i].category, result)
      let oldPrice = result[index].totalSpent;

      result[index].totalSpent = oldPrice + transactions[i].price;
    }
  }

  return result
}

function search(nameKey, myArray){
  for (let i=0; i < myArray.length; i++) {
      if (myArray[i].category === nameKey) {
          return i;
      }
  }
}

module.exports = calculateTotalSpentByCategory;
