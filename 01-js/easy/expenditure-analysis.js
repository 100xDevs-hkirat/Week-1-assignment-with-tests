/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

function calculateTotalSpentByCategory(transactions) {
  //it stores total unique category
  let distinctCategory=[];
  //it stores food category vs totalprice
  let ans=[];


  for(let i=0;i<transactions.length;i++){
    let ob=transactions[i];
    if(distinctCategory.includes(ob.category)){
      let knownCategory=ans.find(obj=>obj.category===ob.category);
      knownCategory.totalSpent+=ob.price;

    }else{
      distinctCategory.push(ob.category);
      ans.push({category:ob.category,totalSpent:ob.price});
    }
    
  }
  return ans;
}

module.exports = calculateTotalSpentByCategory;
