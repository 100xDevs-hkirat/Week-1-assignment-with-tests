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
    if (typeof expression !== 'string') {
      throw new Error('Invalid arithmetic expression');
    }
    const tokens = expression.match(/(?:\d+(?:\.\d*)?|\.\d+)|[()+*/-]|\S/g) || [];
    let index = 0;
    const invalid = () => { throw new Error('Invalid arithmetic expression'); };
    const factor = () => {
      const token = tokens[index++];
      if (token === '+' || token === '-') {
        const value = factor();
        return token === '-' ? -value : value;
      }
      if (token === '(') {
        const value = sum();
        if (tokens[index++] !== ')') invalid();
        return value;
      }
      if (!token || !/^(?:\d+(?:\.\d*)?|\.\d+)$/.test(token)) invalid();
      return Number(token);
    };
    const product = () => {
      let value = factor();
      while (tokens[index] === '*' || tokens[index] === '/') {
        const operator = tokens[index++];
        const right = factor();
        if (operator === '/' && right === 0) throw new Error('Cannot divide by zero');
        value = operator === '*' ? value * right : value / right;
      }
      return value;
    };
    const sum = () => {
      let value = product();
      while (tokens[index] === '+' || tokens[index] === '-') {
        const operator = tokens[index++];
        const right = product();
        value = operator === '+' ? value + right : value - right;
      }
      return value;
    };
    const result = sum();
    if (index !== tokens.length || !Number.isFinite(result)) invalid();
    this.result = result;
  }

  clear() {
    this.result = 0;
  }

  getResult() {
    return this.result;
  }
}

module.exports = Calculator;
