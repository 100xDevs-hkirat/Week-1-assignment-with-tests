/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

function calculateTotalSpentByCategory(transactions) {
  let map = new Map();

  for (const transaction of transactions) {
    let category = transaction.category;
    let price = transaction.price;
    if (map.has(category)) {
      map.set(category,map.get(category)+price);
    } else {
      map.set(category,price);
    }
  }

  

  let expenditure = [];

  for(const key of map.keys()){
    const item = {
      category : key,
      totalSpent : map.get(key)
    };
    expenditure.push(item);
  }

  return expenditure;
}
calculateTotalSpentByCategory([
  {
    id: 1,
    timestamp: 1656076800000,
    price: 10,
    category: 'Food',
    itemName: 'Pizza',
  },
]
);
module.exports = calculateTotalSpentByCategory;
