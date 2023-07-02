/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

function calculateTotalSpentByCategory(transactions) {
  if (transactions.length == 0) {
    return [];
  } else {
    let check = [];
    for (let index = 0; index < transactions.length; index++) {
      check[index] = false;
    }

    let inputArray = [];


    for (let i = 0; i < transactions.length; i++) {
      //let count = 0;
      if (!check[i]) {
        let inner = [];
        for (let j = i + 1; j < transactions.length; j++) {
          if (transactions[i].category == transactions[j].category) {

            let obj = {
              category: transactions[j].category,
              totalSpent: transactions[j].price
            }
            inner.push(obj);
            //count++;
            check[j] = true;
            check[i] = true;
          }
        }
        let obj = {
          category: transactions[i].category,
          totalSpent: transactions[i].price
        }
        inner.push(obj);
        inputArray[i] = inner;
      }
    }

    let result = [];

    for (let i = 0; i < inputArray.length; i++) {
      let ar = inputArray[i];
      // Skip empty items
      if (!ar) {
        continue;
      }

      let a = 0;
      for (let j = 0; j < ar.length; j++) {
        a += ar[j].totalSpent;
      }
      result[i] = {
        category: ar[0].category,
        totalSpent: a,
      };
    }



    return result.filter(item => item !== undefined);;
  }
}

module.exports = calculateTotalSpentByCategory;
