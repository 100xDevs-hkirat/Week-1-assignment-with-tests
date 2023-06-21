  /*
    Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
    and return a list of objects where each object is unique category-wise and has total price spent as its value.
    Transaction - an object like { itemName, category, price, timestamp }.
    Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

    Once you've implemented the logic, test your code by running
    - `npm run test-expenditure-analysis`
  */

    function calculateTotalSpentByCategory(transactions) {
      const ans={};
      for(var i=0; i<transactions.length;i++){
        const { category, price } = transactions[i];
        if(ans[transactions[i].category]){
          ans[transactions[i].category]=ans[transactions[i].category]+transactions[i].price;
        }else{
          ans[transactions[i].category]=transactions[i].price;
        }
        
      }
      // const result = Object.entries(ans).map(([category, total]) => {
      //   return { [category]: total };
      // });
      var anss=[];
      for (const category in ans) {
      const total = ans[category];
        var pp={
          category: category, totalSpent: total
      }
      anss.push(pp);
    }
    return anss;
    }   


module.exports = calculateTotalSpentByCategory;
