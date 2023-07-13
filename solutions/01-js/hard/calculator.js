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

  calculate(expression) {
    const sanitizedExpression = expression.replace(/[^-()\d/*+.]/g, '');
    if (sanitizedExpression.includes('/0')) {
      throw new Error('Cannot divide by zero');
    }

    const sanitizedResult = eval(sanitizedExpression);
    if (!isNaN(sanitizedResult)) {
      this.result = sanitizedResult;
    } else {
      throw new Error('Invalid arithmetic expression');
    }
  }

  clear() {
    this.result = 0;
  }

  getResult() {
    return this.result;
  }
}

module.exports = Calculator;
