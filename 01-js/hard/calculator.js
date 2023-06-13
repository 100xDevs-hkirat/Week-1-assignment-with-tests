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
  getResult() {
    return this.result;
  }
  multiply(data){
    this.result *= data;
  }
  add(data){
    this.result += data;
  }
  subtract(data){
    this.result -= data;
  }
  divide(data){
    if(data === 0){
      throw err;
    }
    this.result /= data;
  }
  clear(){
    this.result = 0;
  }
  calculate(str) {
    // Replace Space with Empty String
    var expression = str.replace(/ /g, "");
    if (expression.includes('/0')) {
      throw new Error('Cannot Divide by Zero');
    }
    this.result = eval(expression);
  }
}

module.exports = Calculator;
