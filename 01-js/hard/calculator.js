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
    if (number === 0) {
      throw new Error("Division by zero is not allowed.");
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
    const sanitizedExpression = expression.replace(/\s/g, ""); // Remove all whitespace characters
    const tokens = sanitizedExpression.match(/(\d+\.?\d*|\+|\-|\*|\/|\(|\))/g); // Tokenize the expression

    if (!tokens) {
      throw new Error("Invalid expression.");
    }

    const stack = [];
    let currentOperator = "+";
    let currentNumber = 0;

    for (const token of tokens) {
      if (/[0-9]+/.test(token)) {
        // If the token is a number
        currentNumber = parseFloat(token);
      } else if (token === "(") {
        // If the token is an opening parenthesis
        stack.push({ currentNumber, currentOperator });
        currentOperator = "+";
        currentNumber = 0;
      } else if (token === ")") {
        // If the token is a closing parenthesis
        const { currentNumber: prevNumber, currentOperator: prevOperator } = stack.pop();

        if (prevOperator === "+") {
          this.add(currentNumber);
        } else {
          this.subtract(currentNumber);
        }
        currentNumber = prevNumber;
      } else {
        // If the token is an operator
        if (token === "+" || token === "-") {
          // Evaluate the previous operator
          if (currentOperator === "+") {
            this.add(currentNumber);
          } else {
            this.subtract(currentNumber);
          }
        } else if (token === "*" || token === "/") {
          // Update the current operator for multiplication and division
          currentOperator = token;
        }
        currentNumber = 0;
      }
    }

    // Evaluate the last operator
    if (currentOperator === "+") {
      this.add(currentNumber);
    } else {
      this.subtract(currentNumber);
    }
  }
}

module.exports = Calculator;
