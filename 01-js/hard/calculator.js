/*
  Implement a class `Calculator` having below methods
    - initialise a result variable in the constructor and keep updating it after every arithmetic operation
    - add: takes a number and adds it to the result
    - subtract: takes a number and subtracts it from the result
    - multiply: takes a number and multiply it to the result
    - divide: takes a number and divide it to the result
    - clear: makes the `result` variable to 0
    - getResult: returns the value of `result` variable
    - calculate: takes a string expression which can take multi-arithmetic operations and give its result
      example input: `10 +   2 *    (   6 - (4 + 1) / 2) + 7`
      Points to Note: 
        1. the input can have multiple continuous spaces, you're supposed to avoid them and parse the expression correctly
        2. the input can have invalid non-numerical characters like `5 + abc`, you're supposed to throw error for such inputs

  Once you've implemented the logic, test your code by running
  - `npm run test-calculator`
*/

class Calculator {
  constructor(){
  this.result = 0; 
  }
add(num){
this.result += num
}
subtract(num){
  this.result =num - this.result
  }
  multiply(num){
    this.result *= num  
  }
  divide(num){
    if(num==0){
      throw Error()
    }
    this.result = num/this.result
  }
clear(){
  this.result = 0
}
getResult(){
  return this.result;
}
calculate(str){
  var num=[]
  var ops=[]
  function performOp(calc,operation) {
    let a=num.pop()
    if(calc.result==0){
      calc.result=num.pop()
    }
    let res=0;
    switch(operation){
    case '+': calc.add(a)
           break;
    case '-': calc.subtract(a)
           break;
    case '*': calc.multiply(a)
           break;
    case '/': calc.divide(a)
           break;
      default: console.log("Operator not found!")
        break;
       }   
  }
  function top(arr) {
    return arr[arr.length -1]
  }
  function isNum(str) {
    if(!isNaN(Number(str))){
      return true
    }
    return false
  }
  str=str.replace(/ /g,'');
  let match= str.match(/((\d+)|[*\/\-+)(])/g)
  let operators=new Map([
    ["+",1],
    ["-",1],
    ["*",2],
    ["^",3]
  ])
  for (let i of match){

    if(isNum(i)){
      num.push(Number(i))
    }
    else {

    if (ops.length == 0 || i == "("){
        ops.push(i)
      }
   else if(i==')'){
    let op=ops.pop();
     do{
      performOp(this,op)
      op=ops.pop();
     }while(op!="(")
   }
   else if(operators.get(top(ops)) > operators.get(i)) {
      do{
        performOp(this,ops.pop())
        
      }while(operators.get(top(ops)) > operators.get(i))
     ops.push(i)
    }
   else{
     ops.push(i)
   }   
    }
  
  }
  while(ops.length!=0){
    performOp(this,ops.pop())
  }
 
  return this.getResult();
}
}

module.exports = Calculator;
