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
    /** @type {number} */
    this.result = 0;
  }

  /**
   * @param {number} value
   */
  add(value) {
    this.result += value;
  }

  /**
   * @param {number} value
   */
  subtract(value) {
    this.result -= value;
  }

  /**
   * @param {number} value
   */
  multiply(value) {
    this.result *= value;
  }

  /**
   * @param {number} value
   */
  divide(value) {
    if(value == 0) {
      throw Error("Invalid Operation !! Can't Divide By Zero");
    }
    this.result /= value;
  }

  clear() {
    this.result = 0;
  }

  /**
   * @returns {number} value
   */
  getResult() {
    return this.result;
  }

  /**
   * calculates the string arithmetic expression
   * @param {string} expression
   * @returns {number}
   */
  calculate(expression) {
    let prev_number = "";
    let operators = [];
    let operands = [];
    expression.split("").map((char) => {
      if ((char >= "0" && char <= "9") || char == '.') {
        prev_number += char;
      } else if (char == "+" || char == "-" || char == "/" || char == "*") {
        if(prev_number.length != 0) {
          operands.push(Number(prev_number));
          prev_number = "";
        }
        while(operators.length > 0 && getPriority(operators[operators.length - 1]) > getPriority(char)) {
          let operand2 = operands.pop();
          let operand1 = operands.pop();
          let new_operand = performOperation(operand1,operand2,operators.pop())
          operands.push(new_operand);
        }
        operators.push(char);
      } else if(char == '(') {
        operators.push(char);
      } else if(char == ')') {
        if(prev_number.length != 0) {
          operands.push(Number(prev_number));
          prev_number = ""
        }
        while(operators[operators.length - 1] != '(') {
          let operand2 = operands.pop();
          let operand1 = operands.pop();
          let operator = operators.pop();
          let new_operand = performOperation(operand1,operand2,operator);
          operands.push(new_operand); 
        }
        operators.pop();
      }else if (char == " ") {
      } else {
        throw Error("Invalid Character !!");
      }
    });

    if(prev_number.length != 0) {
      operands.push(Number(prev_number));
    }

    while(operators.length > 0) {
      let operand2 = operands.pop();
      let operand1 = operands.pop();
      let new_operand = performOperation(operand1,operand2,operators.pop())
      operands.push(new_operand);
    }

    this.result = operands[0];

    /**  UTILITY FUNCTIONS REQUIRED BY CALCULATE FUNCTION */
    /**  DECLARED INSIDE THE FUNCTION AS THEY NEED NOT BE EXPOSED TO USERS */
    /**
     * @param {string} char - operator  
     * @return {number} The Priority of operator 
     * @throws {Error} Throws an Error in case of unknown operator 
     */
    function getPriority(char) {
      if(char == '/') return 4;
      if(char == '*') return 3;
      if(char == '+') return 2;
      if(char == '-') return 1;
      if(char == '(') return 0;
      throw new Error(`Invalid Operator '${char}' !!`)
    }

    function performOperation(operand1,operand2,operator) {
      if(operator == '*') {
        return operand1 * operand2;
      }else if(operator == '/') {
        if(operand2 == 0) {throw new Error("Invalid Operation! Can't Divide by zero");}
        return operand1 / operand2;
      }else if(operator == '-') {
        return operand1 - operand2;
      }else if(operator == '+') {
        return operand1 + operand2
      }else {
        throw new Error("Invalid Operator Specified");
      }
    }
  }
 
}

let calc = new Calculator();

module.exports = Calculator;
