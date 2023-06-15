/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

function calculateTotalSpentByCategory(transactions) 
  {
    //creating an empty object called result to
    //store updated total category wise transactions
    let result = {};

    for (let i = 0; i < transactions.length; i++) 
    {
      let transaction = transactions[i];
      
      //if the specific category matches,
      if (result[transaction.category]) 
        {
          //add the transaction price
          result[transaction.category] += transaction.price;
        } 
      else 
        {
          result[transaction.category] = transaction.price;
        }
    }

    //creating an empty object called output to insert
    //category and total transaction price
    let output = [];
    for (let category in result) 
      {
        output.push({ category: category, totalSpent: result[category] });
      }

    return output;
  }
module.exports = calculateTotalSpentByCategory;
