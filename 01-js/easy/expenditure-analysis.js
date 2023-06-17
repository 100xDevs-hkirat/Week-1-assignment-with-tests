/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

function calculateTotalSpentByCategory(transactions) {
  const categoryMap = {};

  for (const transaction of transactions) {
    const { category, price } = transaction;

    if (categoryMap[category]) {
      categoryMap[category] += price;
    } else {
      categoryMap[category] = price;
    }
  }

  const result = [];

  for (const category in categoryMap) {
    result.push({ category, totalSpent: categoryMap[category] });
  }

  return result;

}
const transactions = [
{
itemName : "burger",
category : "food",
price : 30,
timestamp : 4000
},
{
itemName : "phone",
category : "electronics",
price : 25000,
timestamp : 6800
},
{
itemName : "shirt",
category : "clothing",
price : 2200,
timestamp : 8000,
},
{
itemName : "jeans",
category : "clothing",
price : 3200,
timestamp : 8400
},
{
itemName : "charger",
category : "electronics",
price : 1500,
timestamp : 14000
},
{
itemName : "pizza",
category : "food",
price : 300,
timestamp : 12000,
}]
const result = calculateTotalSpentByCategory(transactions);
console.log(result);
module.exports = calculateTotalSpentByCategory;