/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

function calculateTotalSpentByCategory(transactions) {
  const categoryTotal = {};
  const result = [];

  for (const i of transactions) {
    //Destructuring Object for Category and Price
    const { category, price } = i;

    //checking if category already created in object
    if (category in categoryTotal) {
      //adding expense to the existing category price
      categoryTotal[category] += price;
    } else {
      //creating new category and adding price
      categoryTotal[category] = price;
    }
  }

  //displaying categorywise total expenditure
  for (const category in categoryTotal) {
    const totalSpent = categoryTotal[category];
    const categoryObj = { [category]: totalSpent };
    result.push(categoryObj);
  }

  return result;
}

// Sample Categories
const transactions = [
  {
    itemName: "Laptop",
    category: "Category1",
    price: 1000000,
    timestamp: Date.now(),
  },
  {
    itemName: "Desktop",
    category: "Category1",
    price: 60000,
    timestamp: Date.now(),
  },
  {
    itemName: "Television",
    category: "Category2",
    price: 27000,
    timestamp: Date.now(),
  },
  {
    itemName: "Fridge",
    category: "Category2",
    price: 28000,
    timestamp: Date.now(),
  },
  {
    itemName: "Mixer Juicer",
    category: "Category2",
    price: 8000,
    timestamp: Date.now(),
  },
];

const totalSpentByCategory = calculateTotalSpentByCategory(transactions);
console.log(totalSpentByCategory);


module.exports = calculateTotalSpentByCategory;
