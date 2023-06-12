/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

const items = [
  {
    itemName: "biscuit",
    category: "saaman",
    price: "20",
    timestamp: "20/12/20",
  },
  {
    itemName: "choclate",
    category: "saaman",
    price: "10",
    timestamp: "21/12/20",
  },
  {
    itemName: "lassidrink",
    category: "drink",
    price: "10",
    timestamp: "10/12/20",
  },
];

function calculateTotalSpentByCategory(transactions) {
  const categoryMap = {};

  transactions.forEach((transaction) => {
    const { category, price } = transaction;
    const totalPrice = parseFloat(price);

    if (categoryMap.hasOwnProperty(category)) {
      categoryMap[category] += totalPrice;
    } else {
      categoryMap[category] = totalPrice;
    }
  });

  const result = Object.keys(categoryMap).map((category) => {
    return { category: category, totalSpent: categoryMap[category] };
  });

  return result;
}
const output = calculateTotalSpentByCategory(items);
console.log(output);

module.exports = calculateTotalSpentByCategory;
