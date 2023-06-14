/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

// run a loop over transactions array
// get the category and price vairables with each transaction element  
// check if the category already exists in our result array
// if it does, add its price to totalAmount
// if it doesn't push the category into result array

function calculateTotalSpentByCategory(transactions) {
  
  const result = [];
  
  // run a loop to find the values of category and price 
  for (let i=0; i<transactions.length; i++) {
    // value of category and price of transaction of this specific iteration 
    const { category, price } = transactions[i];
    // to store value of transactions with repeating category
    let repeatingCategoryTransaction = null;

    // to loop over results and check if a transaction exists with same category as current
    for (let j=0; j<result.length; j++) {
      // if an existing transaction has same category as current transaction, store it
      if (result[j].category === category) {
        repeatingCategoryTransaction = result[j];
        break;
      }
    }

    // if a transaction with repeating category exists
    if (repeatingCategoryTransaction) {
      repeatingCategoryTransaction.totalSpent += price;
    } else {
      // if doesn't exist just push a this transaction to result
      result.push({
        category,
        totalSpent: price,
      });
    }
  }
  
  return result;
}

module.exports = calculateTotalSpentByCategory;
