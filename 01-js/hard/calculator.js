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
      throw new Error('Cannot divide by zero');
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
    const sanitizedExpression = expression.replace(/\s+/g, ''); // Remove all spaces from the expression
    const numbers = sanitizedExpression.split(/[-+*/()]/).filter(Boolean);
    const operators = sanitizedExpression.split(/[0-9.]+/).filter(Boolean);

    if (numbers.length !== operators.length + 1) {
      throw new Error('Invalid expression');
    }

    const calculateSubExpression = (subExpression) => {
      const sanitizedSubExpression = subExpression.replace(/\s+/g, '');
      const subExpressionResult = this.calculate(sanitizedSubExpression);
      return subExpressionResult;
    };

    let result = parseFloat(numbers[0]);

    for (let i = 0; i < operators.length; i++) {
      const operator = operators[i];
      const number = parseFloat(numbers[i + 1]);

      switch (operator) {
        case '+':
          result += number;
          break;
        case '-':
          result -= number;
          break;
        case '*':
          result *= number;
          break;
        case '/':
          if (number === 0) {
            throw new Error('Cannot divide by zero');
          }
          result /= number;
          break;
        case '(':
          let closingParenthesisIndex = i + 1;
          let parenthesisCount = 1;

          while (parenthesisCount > 0) {
            if (operators[closingParenthesisIndex] === '(') {
              parenthesisCount++;
            } else if (operators[closingParenthesisIndex] === ')') {
              parenthesisCount--;
            }
            closingParenthesisIndex++;
          }

          const subExpression = sanitizedExpression.substring(i + 1, closingParenthesisIndex - 1);
          const subExpressionResult = calculateSubExpression(subExpression);

          result = subExpressionResult;
          i = closingParenthesisIndex - 2;
          break;
        default:
          throw new Error('Invalid operator');
      }
    }

    return result;
  }
}


module.exports = Calculator;
