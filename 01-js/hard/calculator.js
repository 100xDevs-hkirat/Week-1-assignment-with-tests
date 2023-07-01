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
  constructor(number) {
    this.result = number || 0;
  }
  add = function (number) {
    this.result += number;
  };

  subtract = function (number) {
    this.result -= number;
  };

  multiply = function (number) {
    this.result *= number;
  };

  divide = function (number) {
    if (number === 0) {
      throw new Error("Can't perform invalid operations");
    }
    this.result /= number;
  };

  getResult = function () {
    return this.result;
  };

  clear = function () {
    this.result = 0;
  };

  calculate = function (str) {
    const strTrimmed = str.replace(/\s+/g, "");
    if (/[a-zA-Z]/.test(strTrimmed)) {
      throw new Error("The input have invalid non-numeric charecters");
    }
    this.result = eval(strTrimmed);
    if (this.result === Infinity) {
      throw new Error("Invalid Operations");
    }
    return this.result;
  };
}

module.exports = Calculator;
