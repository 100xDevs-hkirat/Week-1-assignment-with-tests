/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

function calculateTotalSpentByCategory(transactions) {
  // Your code here 

  /*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
  */
  // let categories = [];
  // let totalSpent = [];
  // let totalSpentByCategory = [];
  // transactions.forEach(transaction => {
  //   if (!categories.includes(transaction.category)) {
  //     categories.push(transaction.category);
  //   }
  // });
  // categories.forEach(category => {
  //   let total = 0;
  //   transactions.forEach(transaction => {
  //     if (transaction.category === category) {
  //       total += transaction.price;
  //     } 
  //   });
  //   totalSpent.push(total);
  // });
  // categories.forEach((category, index) => {
  //   totalSpentByCategory.push({[category]: totalSpent[index]});
  // });
  // return totalSpentByCategory;
  var result = {};
  for( obj in transactions){
    if(result[transactions[obj].category]){
      result[transactions[obj].category] += transactions[obj].price;
    }else{
      result[transactions[obj].category] = transactions[obj].price;
    }
  }
  // console.log("result", result);
  var finalResult = [];
  // how to find the list of keys in an object
  

  // console.log("result.keys", result.keys);
  for( key of Object.keys(result)){ 
    // console.log("here"); 
    // console.log(key);
    finalResult.push({"category": key , "totalSpent": result[key]});
  }
  return finalResult;
}


console.log(calculateTotalSpentByCategory([
  {
    id: 1,
    timestamp: 1656076800000,
    price: 10,
    category: 'Food',
    itemName: 'Pizza',
  },
  {
    id: 2,
    timestamp: 1656259600000,
    price: 20,
    category: 'Food',
    itemName: 'Burger',
  },
  {
    id: 3,
    timestamp: 1656019200000,
    price: 15,
    category: 'Clothing',
    itemName: 'T-Shirt',
  },
  {
    id: 4,
    timestamp: 1656364800000,
    price: 30,
    category: 'Electronics',
    itemName: 'Headphones',
  },
  {
    id: 5,
    timestamp: 1656105600000,
    price: 25,
    category: 'Clothing',
    itemName: 'Jeans',
  }

]));

module.exports = calculateTotalSpentByCategory;
