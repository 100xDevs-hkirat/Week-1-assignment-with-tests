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
    this.result /= number;
  }

  clear() {
    this.result = 0;
  }

  getResult() {
    return this.result;
  }

  calculate(expression) {
    // Remove all whitespace characters from the expression
    expression = expression.replace(/\s/g, "");

    // Use regular expression to match and extract valid numbers and operators
    const pattern = /(\d+|\+|\-|\*|\/|\(|\))/g;
    const tokens = expression.match(pattern);

    // If the expression contains invalid characters, throw an error
    if (!tokens || tokens.join("") !== expression) {
      throw new Error("Invalid expression");
    }

    const stack = [];
    const operators = [];

    // Helper function to perform the calculation for two numbers and an operator
    const calculateOperation = () => {
      const b = stack.pop();
      const a = stack.pop();
      const operator = operators.pop();

      switch (operator) {
        case "+":
          stack.push(a + b);
          break;
        case "-":
          stack.push(a - b);
          break;
        case "*":
          stack.push(a * b);
          break;
        case "/":
          stack.push(a / b);
          break;
      }
    };

    // Process each token in the expression
    for (const token of tokens) {
      if (/\d+/.test(token)) {
        // If the token is a number, convert it to a float and add it to the stack
        stack.push(parseFloat(token));
      } else if (/[+\-*/]/.test(token)) {
        // If the token is an operator, perform calculations if necessary and add the operator to the stack
        while (
          operators.length > 0 &&
          operators[operators.length - 1] !== "("
        ) {
          calculateOperation();
        }
        operators.push(token);
      } else if (token === "(") {
        // If the token is an opening parenthesis, add it to the operator stack
        operators.push(token);
      } else if (token === ")") {
        // If the token is a closing parenthesis, perform calculations until an opening parenthesis is encountered
        while (
          operators.length > 0 &&
          operators[operators.length - 1] !== "("
        ) {
          calculateOperation();
        }
        if (operators.length === 0 || operators[operators.length - 1] !== "(") {
          throw new Error("Invalid expression");
        }
        operators.pop(); // Remove the opening parenthesis from the stack
      }
    }

    // Perform any remaining calculations
    while (operators.length > 0) {
      if (operators[operators.length - 1] === "(") {
        throw new Error("Invalid expression");
      }
      calculateOperation();
    }

    // The final result is the only value remaining in the stack
    if (stack.length !== 1) {
      throw new Error("Invalid expression");
    }

    this.result = stack[0];
  }
}

module.exports = Calculator;
