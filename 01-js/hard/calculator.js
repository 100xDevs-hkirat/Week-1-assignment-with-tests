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
  // - initialise a result variable in the constructor and keep updating it after every arithmetic operation
  constructor() {
    this.result = 0;
  }
  // - add: takes a number and adds it to the result
  add(num) {
    this.result += num;
  }
  // - subtract: takes a number and subtracts it from the result
  subtract(num) {
    this.result -= num;
  }
  // - multiply: takes a number and multiply it to the result
  multiply(num) {
    this.result *= num;
  }
  // - divide: takes a number and divide it to the result
  divide(num) {
    if (num == 0) {
      throw new Error("Can't devide with zero");
    }
    this.result /= num;
  }
  // - clear: makes the `result` variable to 0
  clear() {
    this.result = 0;
  }
  // - getResult: returns the value of `result` variable
  getResult() {
    return this.result;
  }
  /*   - calculate: takes a string expression which can take multi-arithmetic operations and give its result
  example input: `10 +   2 *    (   6 - (4 + 1) / 2) + 7`
  Points to Note: 
    1. the input can have multiple continuous spaces, you're supposed to avoid them and parse the expression correctly
    2. the input can have invalid non-numerical characters like `5 + abc`, you're supposed to throw error for such inputs */

  calculate(input) {
    const inputWithoutSpace = input.replace(/\s+/g, "");
    const isValid = /^[0-9+\-*/().\s]+$/.test(inputWithoutSpace);

    if (!isValid) {
      throw new Error("Invalid input given");
    }

    try {
      this.result = eval(inputWithoutSpace);

      if (!Number.isFinite(this.result)) {
        throw new Error("Invalid expression");
      }
    } catch (error) {
      throw new Error("Invalid expression");
    }
  }
  // calculate(expression) {
  //   const cleanedExpression = expression.replace(/\s+/g, "");
  //   const isValid = /^[0-9+\-*/().\s]+$/.test(cleanedExpression);

  //   if (!isValid) {
  //     throw new Error("Invalid expression");
  //   }

  //   try {
  //     this.result = eval(cleanedExpression);
  //     if (!Number.isFinite(this.result)) {
  //       throw new Error("Invalid expression");
  //     }
  //   } catch (error) {
  //     throw new Error("Invalid expression");
  //   }
  // }
}

module.exports = Calculator;
