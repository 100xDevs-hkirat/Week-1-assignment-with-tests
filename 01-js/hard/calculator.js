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
    if (typeof number !== 'number') {
      throw new Error('Invalid input. Expected a number.');
    }
    this.result += number;
  }

  subtract(number) {
    if (typeof number !== 'number') {
      throw new Error('Invalid input. Expected a number.');
    }
    this.result -= number;
  }

  multiply(number) {
    if (typeof number !== 'number') {
      throw new Error('Invalid input. Expected a number.');
    }
    this.result *= number;
  }

  divide(number) {
    if (typeof number !== 'number') {
      throw new Error('Invalid input. Expected a number.');
    }
    if (number === 0) {
      throw new Error('Cannot divide by zero.');
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
    if (typeof expression !== 'string') {
      throw new Error('Invalid input. Expected a string.');
    }
    expression = expression.replace(/\s+/g, ''); // Remove extra spaces from the expression

    // Validate the expression
    if (!/^[0-9+\-*/().]+$/.test(expression)) {
      throw new Error('Invalid expression.');
    }

    const stack = [];
    let number = '';
    let lastOperator = '+';

    for (let i = 0; i < expression.length; i++) {
      const char = expression[i];

      if (!isNaN(Number(char)) || char === '.') {
        number += char;
      } else if (char === '(') {
        stack.push({ number: parseFloat(number), operator: lastOperator });
        stack.push({ operator: '(' });
        number = '';
        lastOperator = '+';
      } else if (char === ')') {
        const prevOperator = stack.pop().operator;
        let prevNumber = stack.pop().number || 0;

        if (lastOperator === '*') {
          this.result -= prevNumber;
          prevNumber *= parseFloat(number);
          this.result += prevNumber;
        } else if (lastOperator === '/') {
          if (parseFloat(number) === 0) {
            throw new Error('Cannot divide by zero.');
          }
          this.result -= prevNumber;
          prevNumber /= parseFloat(number);
          this.result += prevNumber;
        } else {
          this.result += prevNumber;
        }

        number = '';
        lastOperator = prevOperator;
      } else if (char === '+' || char === '-') {
        if (number !== '') {
          const num = parseFloat(number);

          if (lastOperator === '+') {
            this.result += num;
          } else if (lastOperator === '-') {
            this.result -= num;
          } else if (lastOperator === '*') {
            this.result *= num;
          } else if (lastOperator === '/') {
            if (num === 0) {
              throw new Error('Cannot divide by zero.');
            }
            this.result /= num;
          }

          number = '';
        }

        lastOperator = char;
      } else if (char === '*' || char === '/') {
        if (number === '') {
          throw new Error('Invalid expression.');
        }

        const num = parseFloat(number);

        if (lastOperator === '*') {
          this.result *= num;
        } else if (lastOperator === '/') {
          if (num === 0) {
            throw new Error('Cannot divide by zero.');
          }
          this.result /= num;
        } else {
          this.result += num;
        }

        number = '';
        lastOperator = char;
      } else {
        throw new Error('Invalid character in expression.');
      }
    }

    if (number !== '') {
      const num = parseFloat(number);

      if (lastOperator === '+') {
        this.result += num;
      } else if (lastOperator === '-') {
        this.result -= num;
      } else if (lastOperator === '*') {
        this.result *= num;
      } else if (lastOperator === '/') {
        if (num === 0) {
          throw new Error('Cannot divide by zero.');
        }
        this.result /= num;
      }
    }

    if (stack.length !== 0) {
      throw new Error('Invalid expression.');
    }
  }
}
module.exports = Calculator;
