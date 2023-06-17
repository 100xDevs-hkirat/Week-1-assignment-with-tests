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
  #result;
  constructor(result = 0) {
    this.#result = result;
  }

  add(val) {
    this.#result += val;
  }

  subtract(val) {
    this.#result -= val;
  }

  multiply(val) {
    this.#result *= val;
  }

  divide(val) {
    if (!val) throw new Error(num);
    this.#result /= val;
  }

  clear() {
    this.#result = 0;
  }

  getResult() {
    return this.#result;
  }

  isNumber(num) {
    return /[0-9.]/.test(num);
  }

  isOperator(opr) {
    return /[*/+\-\(\)]/.test(opr);
  }

  calculate(expression) {
    expression = expression.replace(/\s/g, "");
    if (!/^[0-9+\-/*/(/).]+$/.test(expression)) {
      throw new Error("Invalid Expression");
    }
    return (this.#result = this.evaluate(expression));
  }

  evaluate(expression) {
    let operators = [];
    let numbers = [];
    for (let i = 0; i < expression.length; ++i) {
      const char = expression[i];
      if (this.isNumber(char)) {
        let number = "";

        while (i < expression.length && this.isNumber(expression[i])) {
          number += expression[i++];
        }

        numbers.push(parseFloat(number));
        --i;
      } else if (this.isOperator(expression[i])) {
        if (expression[i] === "(") {
          operators.push("(");
          continue;
        }
        //
        else if (expression[i] === ")") {
          while (operators.length && operators[operators.length - 1] !== "(") {
            this.performOperation(numbers, operators);
          }
          if (operators.length && operators[operators.length - 1] === "(")
            operators.pop();
          else {
            throw new Error("Invalid Expression");
          }
        }
        //
        else {
          while (
            this.getPriority(char) <=
            this.getPriority(operators[operators.length - 1])
          ) {
            this.performOperation(numbers, operators);
          }
          operators.push(char);
        }
      }
    }

    while (operators.length) {
      this.performOperation(numbers, operators);
    }

    if (numbers.length !== 1 || operators.length) {
      throw new Error("Invalid Expression");
    }
    return numbers.pop();
  }

  getPriority(opr) {
    switch (opr) {
      case "+":
      case "-":
        return 1;

      case "*":
      case "/":
        return 2;

      default:
        return 0;
    }
  }

  performOperation(numbers, operators) {
    if (numbers.length < 2) {
      throw new Error("Invalid Expression");
    }
    let b = numbers.pop();
    let a = numbers.pop();
    let operator = operators.pop();
    let res = 0;
    switch (operator) {
      case "+":
        res = a + b;
        break;
      case "-":
        res = a - b;
        break;
      case "*":
        res = a * b;
        break;
      case "/":
        if (b == 0) throw new Error("Divide by zero");
        res = a / b;
        break;
      default:
        throw new Error("Invalid Expression");
    }
    numbers.push(res);
  }
}

module.exports = Calculator;
