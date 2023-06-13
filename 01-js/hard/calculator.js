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

class Stack {
  constructor() {
    this.stack = [];
  }

  push(element) {
    this.stack.push(element);
  }

  pop() {
    if (this.isEmpty()) {
      return null;
    }
    return this.stack.pop();
  }

  peek() {
    if (this.isEmpty()) {
      return null;
    }
    return this.stack[this.stack.length - 1];
  }

  isEmpty() {
    return this.stack.length === 0;
  }

  size() {
    return this.stack.length;
  }
}

class Calculator {
  result;
  valueStack;
  operatorStack;
  constructor() {
    this.result = 0;
    this.valueStack = new Stack();
    this.operatorStack = new Stack();
  }
  add(num) {
    return this.result += num;
  }
  subtract(num) {
    return this.result -= num;
  }
  multiply(num) {
    return this.result *= num;
  }
  divide(num) {
    if (this.result === 0 || num === 0) {
      throw new Error('Cannot divide by zero');
    }
    this.result /= num;
    return this.result;
  }
  
  addTwoNumbers(num1, num2) {
    return num1+num2;
  }
  subtractTwoNumbers(num1, num2) {
    return num1 - num2;
  }
  multiplyTwoNumbers(num1, num2) {
    return num1 * num2;
  }
  divideTwoNumbers(num1, num2) {
    if(num2 == 0) throw new Error('Cannot divide by 0');
    return num1 / num2;
  }
  clear() {
    return this.result = 0;
  }
  isHigherorEqualPrecedenceOperatorOnStackTop(ch) {
    if (this.operatorStack.isEmpty()) {
      return false;
    }

    const topOperator = this.operatorStack.peek();
    if ((ch === '*' || ch === '/') && (topOperator === '*' || topOperator === '/')) return true;
    if ((ch === '+' || ch === '-') && (topOperator === '*' || topOperator === '/' || topOperator === '+' || topOperator === '-')) return true;
    return false;
  }
  performCalculation(operator, num1, num2) {
    switch (operator) {
      case '+':
        return this.addTwoNumbers(num1, num2);
      case '-':
        return this.subtractTwoNumbers(num1, num2);
      case '*':
        return this.multiplyTwoNumbers(num1, num2);
      case '/':
        return this.divideTwoNumbers(num1, num2);
      default:
        throw new Error('Invalid Operator');
    }
  }

  calculate(expression) {
    const newExpression = expression.split(' ').filter(Boolean).join(' ');

    for (var idx = 0; idx < newExpression.length;) {
      var ch = newExpression[idx];
      if (ch >= '0' && ch <= '9') {
        var num = "";
        while (idx < newExpression.length && ((ch >= '0' && ch <= '9') || (ch == '.'))) {
          num += ch;
          ch = newExpression[++idx];
        }
        this.valueStack.push(parseFloat(num));
      } else if(ch == ' '){ 
        idx++;
      } else if (ch == '*' || ch == '/' || ch == '+' || ch == '-') {
        while (!this.operatorStack.isEmpty() && this.isHigherorEqualPrecedenceOperatorOnStackTop(ch)) {
          var operator = this.operatorStack.pop();
          var num2 = this.valueStack.pop();
          var num1 = this.valueStack.pop();
          var result = this.performCalculation(operator, num1, num2);
          this.valueStack.push(result);

        }
        this.operatorStack.push(ch);
        idx++;
      } else if (ch == '(') {
        this.operatorStack.push(ch);
        idx++;
      } else if (ch == ')') {
        while (this.operatorStack.peek() != '(') {
          var operator = this.operatorStack.pop();
          var num2 = this.valueStack.pop();
          var num1 = this.valueStack.pop();
          var result = (this.performCalculation(operator, num1, num2));
          this.valueStack.push(result);
        }
        this.operatorStack.pop();
        idx++;
      } else {
        throw new Error('Invalid expression');
      }
    }
    while (!this.operatorStack.isEmpty()) {
      var operator = this.operatorStack.pop();
      var num2 = this.valueStack.pop();
      var num1 = this.valueStack.pop();
      var result = (this.performCalculation(operator, num1, num2));
      this.valueStack.push(result);
    }
    this.result = (this.valueStack.pop());
  }
  getResult() {
    return this.result;
  }
}

// Example usage:
const calculator = new Calculator();
calculator.calculate("10 +   2 *    (   6 - (4 + 1) / 2) + 7");
console.log(calculator.getResult()); // Output: 14

module.exports = Calculator;
