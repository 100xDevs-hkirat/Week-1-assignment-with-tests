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
  constructor() {
    this.result = 0;
  }

  add(number) {
    this.result += number;
  }

  subtract(number) {
    this.result -= number;
  }

  multiply(number) {
    this.result *= number;
  }

  divide(number) {
    if (number == 0) {
      throw new Error("Cannot divide by zero");
    }
    this.result /= number;
  }

  clear() {
    this.result = 0;
  }

  getResult() {
    return this.result;
  }

  calculate(expression) {
    // Remove continuous spaces and parse the expression
    const parsedExpression = expression.replace(/\s+/g, '');
    
    // Check for invalid non-numerical characters
    if (!/^[0-9+\-*/(). ]+$/.test(parsedExpression)) {
      throw new Error("Invalid expression");
    }

    // Check for invalid parentheses
    if (!this.checkParenthesesValidity(parsedExpression)) {
      throw new Error("Invalid parentheses in expression");
    }

    if (parsedExpression.includes('/0')) {
      throw new Error("Cannot divide by zero");
    }  

    // Evaluate the expression using eval() - Note: eval() should be used with caution in real-world scenarios
    this.result = eval(parsedExpression);
  }

  checkParenthesesValidity(expression) {
    const parenthesesStack = [];

    for (const char of expression) {
      if (char === "(") {
        parenthesesStack.push(char);
      } else if (char === ")") {
        if (parenthesesStack.length === 0) {
          return false;
        }
        parenthesesStack.pop();
      }
    }

    return parenthesesStack.length === 0;
  }
}

module.exports = Calculator;


module.exports = Calculator;
