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
    if (number === 0) throw new Error("Cannot divide by zero.");
    this.result /= number;
  }

  clear() {
    this.result = 0;
  }

  getResult() {
    if (Number.isNaN(this.result)) return "Invalid User Input"
    return this.result;
  }

  calculate(infixfixExp) {

    const converter = new InfixToPostfixConverter();
    const postfixExpression = converter.infixToPostfix(infixfixExp);

    let n = postfixExpression
    let ans = 0
    let numStack = []
    for (let i = 0; i < n.length; i++) {
      if (/\d/g.test(n[i])) {
        numStack.push(n[i])
      }
      else if (n[i] === "(" || n[i] === ")") throw new Error('expression with invalid parentheses')
      else if (/[a-zA-Z]/g.test(n[i])) {
        throw new Error("Invalid Input");
      }
      else {
        if (n[i] === '+') {
          let num1 = numStack.pop()
          let num2 = numStack.pop()
          ans = num2 + num1
          numStack.push(ans)
        }
        else if (n[i] === '-') {
          let num1 = numStack.pop()
          let num2 = numStack.pop()
          ans = num2 - num1
          numStack.push(ans)
        }
        else if (n[i] === '*') {
          let num1 = numStack.pop()
          let num2 = numStack.pop()
          ans = num2 * num1
          numStack.push(ans)
        }
        else {
          let num1 = numStack.pop()
          let num2 = numStack.pop()
          if (num1 === 0) throw new Error("Cannot divide by zero.");
          ans = num2 / num1
          numStack.push(ans)
        }
      }
    }
    this.result = ans
  }
}


class InfixToPostfixConverter {
  constructor() {
    this.operatorPrecedence = {
      '+': 1,
      '-': 1,
      '*': 2,
      '/': 2,
    };
  }

  infixToPostfix(expression) {
    const postfix = [];
    const operators = [];
    let flag = false;

    let number = '';
    for (let i = 0; i < expression.length; i++) {
      const char = expression[i];
      if (char === ' ') continue

      if (/\d|\./g.test(char)) {
        number += char;
      } else {
        if (number !== '') {
          postfix.push(parseFloat(number));
          number = '';
        }

        if (char === '(') {
          flag = true
          operators.push(char);
        } else if (char === ')') {
          if (flag === false) throw new Error("Invalid Parenthesis")
          while (operators.length && operators[operators.length - 1] !== '(') {
            postfix.push(operators.pop());
          }
          operators.pop(); // Remove '(' from the stack
        } else if (char === '+' || char === '-') {
          if (this.operatorPrecedence[char] <= this.operatorPrecedence[operators[operators.length - 1]]) {
            postfix.push(operators.pop())
          }
          operators.push(char);
        } else {
          while (
            operators.length &&
            this.operatorPrecedence[char] <= this.operatorPrecedence[operators[operators.length - 1]]
          ) {
            postfix.push(operators.pop());
          }
          operators.push(char);
        }
      }
    }

    if (number !== '') {
      postfix.push(parseFloat(number));
    }

    while (operators.length) {
      postfix.push(operators.pop());
    }

    return postfix;
  }
}

// const infixExpression = "10 + 2 * (6 - (4 + 1) / 2) + 7";
// const exp = "(10 + 2) * (5 -2) /4"
// const exp2 = "5 + abc"

// Output: [ 10, 2, 6, 4, 1, '+', 2, '/', '-', '*', 7, '+', '+' ]
// Output: [ 10, 2, '+', 5, 2, '-', '*', 4, '/']


module.exports = Calculator;
