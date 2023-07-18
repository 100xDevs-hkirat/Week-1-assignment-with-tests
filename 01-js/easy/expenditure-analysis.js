/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

function calculateTotalSpentByCategory(transactions) {
output =[];
for(var i=0;i<transactions.length;i++)
{
  category1 = transactions[i].category;
  moneyspent1 =transactions[i].price;
  if( output.length === 0)
  {
  output.push({category: category1, totalSpent:moneyspent1});
  }
  else{
    var present =0;
    for(var j =0;j< output.length;j++)
    {
      if(output[j].category === category1)
      {
        output[j].totalSpent += moneyspent1;
        present =1;
      }
    }
    if(present === 0)
    {
      output.push({category:category1, totalSpent: moneyspent1});
    }

  }

}
  return output
}


module.exports = calculateTotalSpentByCategory;
