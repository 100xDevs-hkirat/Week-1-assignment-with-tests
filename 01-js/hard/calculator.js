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
    if (num === 0) {
      throw new Error("Cannot divide by zero");
    }
    this.result /= num;
  }
  clear() {
    this.result = 0;
  }
  getResult() {
    return this.result;
  }
  calculate(str) {
    // let strArr = str.split("");
    // strArr = strArr.filter((char) => char !== " ");
    // this.validate(strArr);

    //no need to validate as the eval meathod do these itself

    const response = eval(str);
    if (response === Infinity) throw new Error("Cannot divide by zero");
    this.result = response;
  }
  validate(strArr) {
    // console.log(strArr);
    const allowedSigns = "+-*/(){}[].";
    strArr.forEach((char) => {
      if (isNaN(char) && !allowedSigns.includes(char)) {
        console.log("Invalid character ", char, " found");
        throw new Error("Invalid character ");
      }
    });
    this.validatebrackets(strArr);
  }
  validatebrackets(strArr) {
    const stack = [];
    const openingBrackets = ["(", "[", "{"];
    const closingBrackets = [")", "]", "}"];
    strArr.forEach((char) => {
      const isBracket =
        openingBrackets.includes(char) || closingBrackets.includes(char);
      if (!isBracket) return;
      if (openingBrackets.includes(char)) {
        stack.push(char);
      } else {
        const isEmpty = stack.length === 0;
        if (isEmpty) {
          throw new Error("Invalid brackets");
        }
        const top = stack[stack.length - 1];
        if (openingBrackets.indexOf(top) === closingBrackets.indexOf(char)) {
          stack.pop();
        } else {
          throw new Error("Invalid brackets");
        }
      }
    });
  }
}

const calc = new Calculator();
calc.calculate("10 * (2 + 3) ");
console.log(calc.getResult());
module.exports = Calculator;
