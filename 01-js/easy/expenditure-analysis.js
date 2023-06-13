/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/


const transactions = [
  {
    category: "Food",
    itemName: "chocobar",
    price: "19",
    timestamp: "11/06/2023"
  },
  {
    category: "Food",
    itemName: "PS5",
    price: "177",
    timestamp: "12/06/2023" 
  }
]

function calculateTotalSpentByCategory(transactions) {
  const totalCategory = {};

  for (const element of transactions){
    const category = element.category;
    const price = Number(element.price);

    if (category in totalCategory){
      totalCategory[category] += price;
    } else {
      totalCategory[category] = price;
    }
  }

  const result = [];
  for (const category in totalCategory){
    const total = totalCategory[category];
    const categoryObject = {category : category,totalSpent : total};
    result.push(categoryObject)
  }

  return result;
  
}

const result = calculateTotalSpentByCategory(transactions); // [{Food: 19},{Game: 177}]
console.log("This ans is - ",result);

module.exports = calculateTotalSpentByCategory;
