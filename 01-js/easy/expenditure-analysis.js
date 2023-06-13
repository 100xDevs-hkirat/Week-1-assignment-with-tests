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

  for(let i = 0 ; i < transactions.length ;i++){
    let tx_obj = transactions[i];
    let new_obj = {category : tx_obj.category, totalSpent : tx_obj.price};

    let in_result = false;
    if(result.length != 0){
      for(let j = 0 ; j < result.length; j++){
        if(result[j].category == new_obj.category){
          result[j].totalSpent += new_obj.totalSpent;
          in_result = true;
        }
      }
    }

    if(!in_result){
      result.push(new_obj);
    }

  } 
  return result;
}



module.exports = calculateTotalSpentByCategory;
