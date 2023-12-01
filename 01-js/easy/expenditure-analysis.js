/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

function calculateTotalSpentByCategory(transactions) {
   
  let arr = {};
  let size = Object.keys(transactions).length;
  for(let i=0;i<size;i++){
    let t = transactions[i];
    if(arr[t.category]){
        arr[t.category]=arr[t.category]+t.price;
    }
    else {
        arr[t.category]=t.price;
    }   
  }
  let keys=Object.keys(arr);
  let ans = [];
  for(let i=0;i<keys.length;i++){
    let category=keys[i];

    let obj = {
      category:category,
      totalSpent:arr[category]
    }

     ans.push(obj);
     console.log(ans);
   }
   return ans;
}

module.exports = calculateTotalSpentByCategory;

// let transactions =[
//   {itemName:"Samosa", 
//     category:"Food", 
//     price:15, 
//     timestamp:38443 },
//     {itemName:"Mirinda", 
//       category:"Drink", 
//       price:35, 
//       timestamp:3483 },
//       {itemName:"Fruti",
//        category:"Drink",
//        price:20,
//       timestamp:8349}
// ]
// let ans = calculateTotalSpentByCategory(transactions)
// console.log(ans);
// console.log(calculateTotalSpentByCategory(transactions));


