/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/
// const Transactions = [
//   { itemName: "horlicks", category: "Food", price: 20 },
//   { itemName: "mangoshake", category: "Food", price: 20 },
//   { itemName: "addidas", category: "Clothing", price: 1000 },
//   { itemName: "nike", category: "Clothing", price: 2000 },
// ];
// function calculateTotalSpentByCategory(transactions) {
//   const allUniqueCatagory = [];

//   Transactions.forEach((item) => {
//     if (!allUniqueCatagory.includes(item.category)) {
//       allUniqueCatagory.push(item.category);
//     }
//   });
//   // console.log(allUniqueCatagory)
//   const PriceSumByCategory = allUniqueCatagory.map((category) => {
//     const transactionsCategory = Transactions.filter((transaction) => {
//       return transaction.category === category;
//     });
//     const priceSum = transactionsCategory.reduce((sum,item)=> sum + item.price,0)

//     return {
//       category: category,
//       totalSpent: priceSum,
//     };
//   });
//   return PriceSumByCategory
// }
function calculateTotalSpentByCategory(transactions) {
  let total_category_wise_spent_list = [];

  for (let entry of transactions) {
    const category = entry.category;
    const price = entry.price;

    let categoryFound = false;

    for (let item of total_category_wise_spent_list) {
      if (item.category === category) {
        item.totalSpent += price;
        categoryFound = true;
        break;
      }
    }

    if (!categoryFound) {
      total_category_wise_spent_list.push({ category, totalSpent: price });
    }
  }

  return total_category_wise_spent_list;
}


module.exports = calculateTotalSpentByCategory;
// calculateTotalSpentByCategory(Transactions);
