class Calculator {
  Calculator() {
    this.result = 0;
  }

  add(number) {
    if (typeof number === "number") {
      this.result += number;
    } else {
      throw new Error("Invalid input: Not a number");
    }
  }

  subtract(number) {
    if (typeof number === "number") {
      this.result -= number;
    } else {
      throw new Error("Invalid input: Not a number");
    }
  }

  multiply(number) {
    if (typeof number === "number") {
      this.result *= number;
    } else {
      throw new Error("Invalid input: Not a number");
    }
  }

  divide(number) {
    if (typeof number === "number") {
      if (number === 0) {
        throw new Error("Division by zero");
      }
      this.result /= number;
    } else {
      throw new Error("Invalid input: Not a number");
    }
  }

  clear() {
    this.result = 0;
  }

  getResult() {
    return this.result;
  }

  calculate(expression) {
    // Remove spaces and validate the expression for non-numeric characters
    expression = expression.replace(/\s/g, "");
    if (!/^[0-9\+\-\*\/\(\)\.\s]+$/.test(expression)) {
      throw new Error("Invalid input: Contains invalid characters");
    }

    try {
      this.result = eval(expression);
    } catch (error) {
      throw new Error("Invalid expression");
    }
  }
}

module.exports = Calculator;
