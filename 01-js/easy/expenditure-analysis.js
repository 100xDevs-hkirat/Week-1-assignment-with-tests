/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

function calculateTotalSpentByCategory(transactions) {

  categoricalSpending={};

  transactions.forEach(transaction => {
    categoricalSpending[transaction["category"]]? categoricalSpending[transaction["category"]]+=transaction["price"] : categoricalSpending[transaction["category"]]=transaction["price"]
  });

  ans=[];
  for(let i=0;i<Object.entries(categoricalSpending).length;i++)
  {
    var obj={
      category:Object.entries(categoricalSpending)[i][0],
      totalSpent:Object.entries(categoricalSpending)[i][1]
    };
    ans.push(obj)
  }

  return ans;
}

module.exports = calculateTotalSpentByCategory;
