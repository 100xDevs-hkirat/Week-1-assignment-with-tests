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
    this.result = 0
  }

  add(n) {
    n = Number(n)
    if (isNaN(n)) {
      throw new Error()
    }
    this.result += Number(n)
  }

  subtract(n) {
    n = Number(n)
    if (isNaN(n)) {
      throw new Error()
    }
    this.result -= Number(n)
  }

  multiply(n) {
    n = Number(n)
    if (isNaN(n)) {
      throw new Error()
    }
    this.result *= Number(n)
  }

  divide(n) {
    n = Number(n)
    if (isNaN(n) | n === 0) {
      throw new Error()
    }
    this.result /= Number(n)
  }

  clear() {
    this.result = 0
  }

  getResult() {
    return this.result
  }

  evaluateExpression(exp, e1, e2, e1Function, e2Function) {
    let index = 0
    let initialAdd = false
    let changed = false

    while (true) {
      let v = exp[index]
      if (index === exp.length) {
        break
      }
      if (v === e1 | v === e2) {
        if (!initialAdd) {
          this.add((exp[index - 1]))
          initialAdd = true
          changed = true
        }
        if (v === e1) {
          e1Function.bind(this)((exp[index + 1]))
        } else {
          e2Function.bind(this)((exp[index + 1]))
        }
        exp.splice(index - 1, 3, this.result.toString())
        continue
      }
      index += 1
    }

    return changed
  }

  pushInStack(stack, str) {
    if (str) {
      stack.push(str)
    }
  }

  expression(exp) {
    let stack = []
    let index = 0
    let start = []

    console.log(exp);

    while (index < exp.length) {
      if (exp[index] === "(") {
        stack.push(exp[index])
        start.push(index)
      }

      if (exp[index] === ")") {
        if (stack[stack.length - 1] !== "(") {
          throw new Error()
        }
        let innerExp = exp.slice(start[start.length - 1] + 1, index)
        
        this.evaluateExpression(innerExp, "*", "/", this.multiply, this.divide)
        let res = this.getResult()
        this.clear()
        if (this.evaluateExpression(innerExp, "+", "-", this.add, this.subtract)) {
          res = this.getResult()
        }
        
        exp.splice(start[start.length - 1], index - start[start.length - 1] + 1, res.toString())
        index = start[start.length - 1]
        start.pop()
        stack.pop()
        this.clear()
      }

      index += 1
    }

    if (stack.length > 0) {
      throw new Error()
    }

    this.evaluateExpression(exp, "*", "/", this.multiply, this.divide)
    let res = this.getResult()
    this.clear()
    if (this.evaluateExpression(exp, "+", "-", this.add, this.subtract)) {
      res = this.getResult()
    }
    this.result = res
  }

  calculate(exp) {
    let stack = []

    let index = 0
    let i = 0
    for (; i < exp.length; i++) {
      if (exp[i] === ".") {
        continue
      }

      if (exp[i] === " ") {
        this.pushInStack(stack, exp.slice(index, i))
        index = i + 1
        continue
      }

      if (isNaN(Number(exp[i]))) {
        this.pushInStack(stack, exp.slice(index, i))
        stack.push(exp[i])
        index = i + 1
      }
    }
    this.pushInStack(stack, exp.slice(index, i))

    this.expression(stack)
  }
}

let calc = new Calculator()
calc.calculate('10 - (4 + 2)')
console.log(calc.getResult());

module.exports = Calculator;
