/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
  Transaction - an object like { itemName, category, price, timestamp }.

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

function calculateTotalSpentByCategory(transactions) {

  var output = []

  for(var i = 0; i < transactions.length; i++) {
    const index = output.findIndex(element => element.category === transactions[i].category);
    
    /* const index = output.findIndex(element => element.hasOwnProperty(transactions[i].category)); 

      This should also ideally work right ??, 

      Why it is not working. 

    */
    if(index != -1) {
      output[index].totalSpent += transactions[i].price;
    }
    else {
      output.push({
        category : transactions[i].category,
        totalSpent : transactions[i].price
      });
    }
  }

  return output;
}

module.exports = calculateTotalSpentByCategory;
