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
  result = 0;

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
    if (num != 0) {
      this.result /= num;
    } else throw new Error('divinding with zero is not possible');
  }

  clear() {
    this.result = 0;
  }

  getResult() {
    return this.result;
  }

  calculate(str) {
 //checking for valid string-> [ not contain characters, and empty spaces]
    const regex = /^[ \d+\*\-.(){}\/\s]+$/; //$ marks the end of string, we've use \ before"-" because in regex it represents range

    if (!regex.test(str)) {
      throw new Error('string contain invalid characters');
    }
    const newString = str.replace(/[ ]/g, ''); //removing space
    console.log(newString);
    
//  Tokenize the expression by splitting it into operators, parentheses, and numbers
    let arr = newString.match(/(\d+|\+|\-|\*|\/|\(|\))/g);
    console.log(arr);

    //now we need to calculate the expression;
    try {
      // Evaluate the expression using eval()
      if (newString.includes('/0')) {
        throw new Error('Division by zero is not allowed');
      }
      this.result = eval(newString);
    } catch (error) {
      throw new Error('Error calculating expression');
    }
  }
}

module.exports = Calculator;