/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

function calculateTotalSpentByCategory(transactions) {
  let output = []


  // console.log(output)




  // console.log("PROPERTY: VALUE ==> " + output.amountSpent);

  for(let i = 0; i < transactions.length; i++){
    // let foundItemsIndex = -1;
    let foundIndex = output.findIndex(function(item) {
      return item.category === transactions[i].category;
    });

  
    // console.log(output)
    // console.log(foundIndex)
    if(foundIndex !== -1){
      // console.log("ENTERED index: " + i)
      output[foundIndex].totalSpent = output[foundIndex].totalSpent + transactions[i].price
      // console.log(output)
    }else{
      let object = {
        category: transactions[i].category,
        totalSpent: transactions[i].price
      }
      output.push(object);
    }
    // console.log(output);
  }
  // console.log(transactions[2].category);
  // console.log(transactions[2].price);

  return output;
}

  const transactions = [
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
    },
  ];

console.log(calculateTotalSpentByCategory(transactions));

module.exports = calculateTotalSpentByCategory;