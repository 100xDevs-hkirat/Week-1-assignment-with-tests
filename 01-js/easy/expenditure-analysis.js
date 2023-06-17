/**
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
@param {object[]} transactions
  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

function calculateTotalSpentByCategory(transactions) {
  const groupedTransactions = transactions.reduce((acc,currItem)=>{
    const accItem = acc.length > 0 &&  acc.find(({category})=> category === currItem.category);
   //console.log("item:" + item);
    
    if(accItem){
      accItem.totalSpent += currItem.price
    }
    else{
      acc.push(
        {
         category: currItem.category , totalSpent: currItem.price 
        }
      );
    }
    return acc;
  },[])
  

 // const [{category,price}] = transactions;
//  console.log(groups);
  
  return groupedTransactions;
}


module.exports = calculateTotalSpentByCategory;
