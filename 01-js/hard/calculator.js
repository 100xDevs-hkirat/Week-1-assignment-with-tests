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
    this.result=0;
  }
  add(n){
    this.result+=n;
  }
  subtract(n){
    this.result-=n;
  }
  multiply(n){
    this.result*=n;
  }
  divide(n){
    if(n==0) throw new Error('Division by zero is not allowed');
    else this.result/=n;
  }
  clear(){
    this.result=0;
  }
  getResult(){
    return this.result;
  }
  cleaning(str){
    let s="";
    let openParenthesisCount=0;

    for(let i=0;i<str.length;i++){
      let asciiValue=str.charCodeAt(i);
      //check for valid parentheses.
      if(asciiValue===40) openParenthesisCount++;
      if(asciiValue===41 && openParenthesisCount===0) throw new Error("invalid parenthesis");
      if(asciiValue===41 && openParenthesisCount>0) openParenthesisCount--;

      //removing whitespaces
      if((asciiValue>=40&&asciiValue<=43)||(asciiValue>=45&&asciiValue<=57)){
        s+=str[i];
      }
      //expression validation
      else{
        if(asciiValue!=32) throw new Error('Invalid expression');
      }

    }
    //validating equal number of opening and closing parentheses.
    if(openParenthesisCount!=0) throw new Error('Invalid parenthesis count');

    return s;
  }
  calculate(str){
    // let s=this.cleaning(str);
    // if(s.includes('/0')){
    //   throw new Error('division by zero');
    // }
    // let ans=eval(s);
    // //if(ans===Infinity) throw new Error('division by zero');
    // this.result=ans;
    let s=this.cleaning(str);
    try{
      let ans=eval(s);
      if(ans===Infinity){
        throw new Error('division by zero');
      }
      this.result=ans;
    }catch(error){
      return error;
    }
  }
}

const myCal=new Calculator();
myCal.calculate('10/0');
console.log(myCal.getResult());
// myCal.check(0)
// myCal.add(-5);
// myCal.multiply(-3);
// console.log(myCal.getResult());
// myCal.clear();
// myCal.add(7);
// console.log(myCal.getResult());
// console.log(myCal.divide(0))
// console.log(myCal.getResult());

module.exports = Calculator;
