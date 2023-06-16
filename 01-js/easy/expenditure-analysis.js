/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

function calculateTotalSpentByCategory(transactions) {
  let result = [];

  for (let i = 0; i < transactions.length; i++) {
    const isPresent = result.find(
      (item) => item.category === transactions[i].category
    );

    if (isPresent !== undefined) {
      result = result.map((eachObject) => {
        if (eachObject.category === isPresent.category) {
          return {
            ...eachObject,
            totalSpent: isPresent.totalSpent + transactions[i].price,
          };
        }
        return eachObject;
      });
    } else {
      newItem = {
        category: transactions[i].category,
        totalSpent: transactions[i].price,
      };
      result.push(newItem);
    }
  }

  return result;
}





module.exports = calculateTotalSpentByCategory;
