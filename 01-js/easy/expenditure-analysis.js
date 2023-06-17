/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

// function calculateTotalSpentByCategory(transactions) {
//   let totalSpentByCategory = {};
//   for (const element of transactions) {
//     if (totalSpentByCategory[element.category]) {
//       totalSpentByCategory[element.category] += element.price;
//     } else {
//       totalSpentByCategory[element.category] = element.price;
//     }
//   }

//   let ans = [];

//   let keys = Object.keys(totalSpentByCategory);

// for(var i = 0; i < keys.length; i++) {
//   let obj = {
//     category: keys[i],
//     totalSpent: totalSpentByCategory[keys[i]]
//   };
//   ans.push(obj);
// }

// let ans = [];
// let keys = Object.keys(totalSpentByCategory);
// for(const value of keys) {
//   ans.push({category: value, totalSpent: totalSpentByCategory[value]});
// }

// let ans = [];
// Object.keys(totalSpentByCategory).forEach((key) => {
//   ans.push({ category: key, totalSpent: totalSpentByCategory[key] });
// });
//   return ans;
// }

function calculateTotalSpentByCategory(transactions) {
  let totalSpentByCategory = {}; //creating an empty object
  for (const element of transactions) {
    // for each element in transactions
    if (totalSpentByCategory[element.category]) {
      // each element in transactions has a category
      totalSpentByCategory[element.category] += element.price; // if the category is already present in the object, add the price to the existing price
    } else {
      totalSpentByCategory[element.category] = element.price; // if the category is not present in the object, add the category and price to the object (first time for that category)
    }
  }

  let ans = []; // creating an empty array
  Object.keys(totalSpentByCategory).forEach((key) => {
    // ob ject.keys returns an array of keys in the object e,g, [ 'food', 'drink' ] so each key is represented by key.
    ans.push({ category: key, totalSpent: totalSpentByCategory[key] }); // for each key, push an object with category and totalSpent to the array
  });
  return ans;
}

module.exports = calculateTotalSpentByCategory;
