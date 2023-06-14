/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

function calculateTotalSpentByCategory(transactions) {
  const groups = transactions.reduce((groups, item) =>{
    const key = item['category'];
    if(!groups[key]) groups[key] = [];
    groups[key].push(item);
    return groups;
  }, {});

  let ans = [];
  for(const key in groups){
    let total = groups[key].reduce((total, obj) => {
      console.log(key, obj.price)
      total = total + obj.price;
      return total;
    }, 0);
    ans.push({category : key, totalSpent: total});
  }
  console.log(ans)
  return ans;
}
	
module.exports = calculateTotalSpentByCategory;
