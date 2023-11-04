

function calculateTotalSpentByCategory(transactions) {
   var spendEstimates ={};

  for(var i =0; i<transactions.length;i++){
  var t= transactions[i];
  if(spendEstimates[t.category])
   spendEstimates[t.category]+= t.price;
  else
  spendEstimates[t.category]=t.price;
  }
  var arr = Object.keys(spendEstimates);
  var answer =[];
  for(var j=0;j<arr.length;j++){
     var category = arr[j];
     var obj ={
        category:category,
        totalSpent:spendEstimates[arr[j]]
     }
     answer.push(obj);
  }
  return answer;
}

module.exports = calculateTotalSpentByCategory;
