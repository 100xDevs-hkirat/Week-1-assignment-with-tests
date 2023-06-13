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
    if (num === 0) throw new Error("Zero division error");
    this.result /= num;
  }

  clear() {
    this.result = 0;
  }

  getResult() {
    return this.result;
  }

  calculate(expression) {
    expression = [...expression].map(i => i !== ' ' ? i : '').join(''); 

    const validateParenthesis = (expression) => {
      const stack = [];
      for (let i = 0; i < expression.length; i++) {
        const char = expression[i];
        if (char === '(') {
           stack.push(char);
        }  else if (char === ')') {
          if (stack.length === 0 || stack.pop() !== '(') {
            return false;
          }
        }
      }
      return stack.length === 0;
    }

    if (!validateParenthesis(expression)) throw new Error("Invalid parenthesis");

    const stack = []
    const queue = []
    let current = 0

    const precedence = {
      "+": 0,
      "-": 0,
      "*": 1,
      "/": 1
    }

    while (current < expression.length) {
      if (expression[current].match(/[0-9.]/)) {
        if (current > 0) {
          if (expression[current - 1].match(/[0-9.]/)) {
            queue[queue.length - 1] += expression[current];
          } else {
            queue.push(expression[current]);
          }
        } else {
          queue.push(expression[current]);
        }
      } else if ([..."+-*/"].some(c => c === expression[current])) {
        while (precedence[expression[current]] < precedence[stack[stack.length - 1]]) {
          queue.push(stack.pop());
        }
        stack.push(expression[current]);
      } else if (expression[current] === "(") {
        stack.push("(")
      } else if (expression[current] === ")") {
        while (stack[stack.length - 1] !== "(") {
          queue.push(stack.pop());
        }
        stack.pop()
      } else {
        throw new Error("invalid character");
      }
      current += 1;
    }
    while (stack.length !== 0) {
      queue.push(stack.pop());
    }
    console.log(queue.join(' '))
    for (let i = 0; i < queue.length; i++) {
      if ([..."+-/*"].some(e => e === queue[i])) {
        let operator = queue[i]
        if (operator === "+") stack.push(stack.pop() + stack.pop());
        else if (operator === "-") {
          const second = stack.pop();
          const first = stack.pop();
          stack.push(first - second);
        }
        else if (operator === "*") stack.push(stack.pop() * stack.pop());
        else if (operator === "/") {
          const second = stack.pop();
          const first = stack.pop();
          if (second === 0) throw new Error("Zero divison error");
          stack.push(first / second);
        };
      }
      else {
        stack.push(parseFloat(queue[i]));
      }
      console.log(stack)
    }
    this.result = stack[0];
  }
}

const calc = new Calculator();
console.log(calc.calculate("(2.5 + 1.5) * 3"));

module.exports = Calculator;
