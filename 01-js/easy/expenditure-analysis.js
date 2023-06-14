/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

function calculateTotalSpentByCategory(transactions) {
    var finalOutput=[] 
    if (transactions.length == 0){
      return finalOutput
    }else{
        for (var i =0 ; i<transactions.length; i++){
          var matched = false
          obj = {}
          if (finalOutput.length ==0){
            obj['category'] =  transactions[i].category
            obj['totalSpent'] = transactions[i].price
            finalOutput.push(obj)
            continue
          }else{
            console.log("Inside else")
            for (var j=0; j<finalOutput.length; j++){
              if (finalOutput[j].category==transactions[i].category){
                finalOutput[j].totalSpent = finalOutput[j].totalSpent + transactions[i].price
                console.log("Inside else-if line 41",finalOutput[j].totalSpent)
                matched = true
                continue
              }
            } 
            console.log(finalOutput)
            if (matched == false){
              obj['category'] =  transactions[i].category
              obj['totalSpent'] = transactions[i].price
              finalOutput.push(obj)
            }
          }
        }
    
        return finalOutput;
      }
      
    }
  
module.exports = calculateTotalSpentByCategory;
