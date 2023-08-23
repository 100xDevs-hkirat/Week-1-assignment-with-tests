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
  constructor(result) {
    this.result=0;
  }

  add(number) {
    console.log("add- " + this.result)
    this.result = this.result + number
  }

  subtract(number) {
    this.result = this.result - number
  }

  multiply(number) {
    this.result = this.result * number
  }

  divide(number) {
    console.log("division- " + number + " " + this.result)
    if(number===0)
      throw new Error()
    this.result = this.result/number 
  }

  clear(number) {
    this.result = 0
  }

  getResult() {
    return this.result
  }

  calculate(str) {
    if(str.includes("/ 0")) {
      throw new Error
    }
    const allowedChars = /[0-9+\-*/().\s]/g;
    const updatedStr = str.match(allowedChars).join('');
    if(updatedStr!==str)
      throw new Error()
    this.result = eval(updatedStr)
  }
}

module.exports = Calculator;
