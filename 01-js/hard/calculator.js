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

  clear() {
    this.result = 0;
  }

  getResult() {
    return this.result;
  }
  add(number) {
    if (typeof number !== "number")
      throw new Error("Invalid Input please enter a number");
    else this.result += number;
  }

  subtract(number) {
    if (typeof number !== "number")
      throw new Error("Invalid Input please enter a number");
    else this.result -= number;
  }

  multiply(number) {
    if (typeof number !== "number")
      throw new Error("Invalid Input please enter a number");
    else this.result *= number;
  }

  divide(number) {
    if (typeof number !== "number")
      throw new Error("Invalid Input please enter a number");
    else if (number === 0) throw new Error("DIVISION BY ZERO");
    else this.result /= number;
  }

  calculate(expression) {
    if (typeof expression !== "string") {
      return new Error("invalid input, string expected");
    }
    expression = expression.replace(/\s+/g, "");

    if (!/^[0-9+\-*/().\s]+$/.test(expression)) {
      throw new Error("Invalid expression");
    }
    try {
      this.result = eval(expression);
      if (!isFinite(this.result)) throw new Error();
    } catch (error) {
      throw new Error("Error occurred while evaluating the expression.");
    }
  }
}
const calc = new Calculator();
calc.add(5);
console.log(calc.getResult());
calc.multiply(3);
console.log(calc.getResult());
calc.subtract(7);
console.log(calc.getResult());
calc.divide(2);
console.log(calc.getResult());
calc.clear();
console.log(calc.getResult());
calc.calculate("10 + 2 * (6 - (4 + 1) / 2) + 7");
console.log(calc.getResult());
module.exports = Calculator;
