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

  add(num) {
    this.result += num;
  }

  subtract(num) {
    this.result -= num;
  }

  multiply(num) {
    this.result *= num;
  }

  divide(num) {
    if (num === 0) throw new Error();
    this.result /= num;
  }

  clear() {
    this.result = 0;
  }


  getResult() {
    return this.result;
  }

  hasOnlyDigits(str) {
    return /^\d+$/.test(str);
  }

  isOperand(character) {
    const operands = ["+", "-", "*", "/"];
    return operands.includes(character);
  }


checkValidExpression(expression) {
  const expressionWithoutSpaces = expression.replace(/\s/g, "");
  const validChars = /[0-9()+\-*/.]/g;
  const invalidChars = expressionWithoutSpaces.replace(validChars, "");

  if (invalidChars.length > 0) {
    throw new Error("Invalid character(s) found: " + invalidChars);
  }
}

  calculate(expression) {
    this.checkValidExpression(expression);

    const operators = {
      "+": (a, b) => a + b,
      "-": (a, b) => a - b,
      "*": (a, b) => a * b,
      "/": (a, b) => {
        if (b === 0) throw new Error();
        return a / b;
      }
    };

    const numbers = [];
    const ops = [];

    const precedence = {
      "+": 1,
      "-": 1,
      "*": 2,
      "/": 2,
    };

    const tokens = expression.split(/(\+|\-|\*|\/|\(|\))/);

    for (let token of tokens) {
      token = token.trim(); // Trim whitespaces

      if (token === "") {
        continue; // Skip empty tokens
      }

      if (!isNaN(token)) {
        numbers.push(parseFloat(token));
      } else if (token in operators) {
        while (
          ops.length > 0 &&
          precedence[token] <= precedence[ops[ops.length - 1]]
        ) {
          const operator = ops.pop();
          const operand2 = numbers.pop();
          const operand1 = numbers.pop();
          const result = operators[operator](operand1, operand2);
          numbers.push(result);
        }
        ops.push(token);
      } else if (token === "(") {
        ops.push(token);
      } else if (token === ")") {
        while (ops[ops.length - 1] !== "(") {
          const operator = ops.pop();
          const operand2 = numbers.pop();
          const operand1 = numbers.pop();
          const result = operators[operator](operand1, operand2);
          numbers.push(result);
        }
        ops.pop(); // Remove the "(" from the stack
      }
    }

    while (ops.length > 0) {
      const operator = ops.pop();
      const operand2 = numbers.pop();
      const operand1 = numbers.pop();
      const result = operators[operator](operand1, operand2);
      numbers.push(result);
    }

    const res = numbers.pop();
    this.result = res;

  }
}

module.exports = Calculator;
