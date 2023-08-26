/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

function calculateTotalSpentByCategory(transactions) {
  var listOfCat = [];
  var temp_ans = {};
  var ans = [];

  for (var item of transactions){
    if (!listOfCat.includes(item.category)){
      listOfCat.push(item.category);
      temp_ans[item.category] = item.price;
    }
    else{
      temp_ans[item.category] += item.price;
    }
  }
  
  for (const [key, value] of Object.entries(temp_ans)){
    ans.push({
      category: key,
      totalSpent: value
    });
  }
  return ans;
}

module.exports = calculateTotalSpentByCategory;
