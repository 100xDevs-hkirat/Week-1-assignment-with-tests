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

  add = (operand) => (this.result += operand);

  subtract = (operand) => (this.result -= operand);

  multiply = (operand) => (this.result *= operand);

  divide = (operand) => (this.result /= operand);

  getResult = () => this.result;

  clear = () => (this.result = 0);

  calculate = (expression) => {
    expression = expression.replace(/\s/g, "");

    if (!/^[+\-*/^()0-9.]+$/.test(expression)) {
      throw new SyntaxError("Invalid expression");
    }

    const pattern = /([+\-*/^()])/;
    const tokens = expression.split(pattern).filter(Boolean);

    const precedence = { "+": 1, "-": 1, "*": 2, "/": 2, "^": 3 };
    const output = [];
    const operatorStack = [];

    tokens.forEach((token) => {
      if (token.match(/^\d+(\.\d+)?$/)) {
        output.push(token);
      } else if (token.match(/^[+\-*/^]$/)) {
        while (
          operatorStack.length > 0 &&
          operatorStack[operatorStack.length - 1] !== "(" &&
          precedence[token] <=
            (precedence[operatorStack[operatorStack.length - 1]] || 0)
        ) {
          output.push(operatorStack.pop());
        }
        operatorStack.push(token);
      } else if (token === "(") {
        operatorStack.push(token);
      } else if (token === ")") {
        while (
          operatorStack.length > 0 &&
          operatorStack[operatorStack.length - 1] !== "("
        ) {
          output.push(operatorStack.pop());
        }
        if (
          operatorStack.length > 0 &&
          operatorStack[operatorStack.length - 1] === "("
        ) {
          operatorStack.pop();
        }
      }
    });

    while (operatorStack.length > 0) {
      output.push(operatorStack.pop());
    }

    const stack = [];

    output.forEach((token) => {
      if (token.match(/^\d+(\.\d+)?$/)) {
        stack.push(parseFloat(token));
      } else {
        const operand2 = stack.pop();
        const operand1 = stack.pop();

        let result;
        if (token === "+") {
          result = operand1 + operand2;
        } else if (token === "-") {
          result = operand1 - operand2;
        } else if (token === "*") {
          result = operand1 * operand2;
        } else if (token === "/") {
          result = operand1 / operand2;
        } else if (token === "^") {
          result = Math.pow(operand1, operand2);
        }

        stack.push(result);
      }
    });

    this.result = stack.pop();
  };
}

module.exports = Calculator;
