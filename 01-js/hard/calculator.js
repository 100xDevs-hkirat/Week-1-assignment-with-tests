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
      throw new Error("Division by zero is not allowed.");
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
    expression = expression.replace(/\s+/g, "");

    if (!/^[0-9+\-*/().\s]+$/.test(expression)) {
      throw new Error("Invalid expression.");
    }

    if (expression.includes("/0")) {
      throw new Error("Division by zero is not allowed.");
    }

    try {
      // Evaluating the expression using a custom safeEval function
      this.result = safeEval(expression);
      if (typeof this.result !== "number" || isNaN(this.result)) {
        throw new Error("Invalid expression.");
      }
    } catch (error) {
      throw new Error("Invalid expression.");
    }
  }
}

// Custom safeEval function to avoid using eval() directly
function safeEval(expression) {
  return Function(`'use strict'; return (${expression})`)();
}

module.exports = Calculator;
