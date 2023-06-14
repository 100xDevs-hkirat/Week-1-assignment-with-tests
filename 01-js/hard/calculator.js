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

  check_paranthisis(input) {
    let stack = [];
    for (let i = 0; i < input.length; i++)
    {
      if(input[i] === '(')
      {
        stack.push(input[i]);
      }
      else if(input[i] === ')')
      {
        if (stack.length === 0)
        {
          stack.push(input[i]);
        }
        else if (stack[stack.length - 1] == '(')
           stack.pop();
      }
    }
    return stack.length === 0;
  }

  calculate (input) {
    let cleanedExpression = input.replace(/\s/g, ''); 

    if (!/^[0-9+\-*/().]+$/.test(cleanedExpression)) {
      throw new Error("Invalid expression");
    }
    
    if (this.check_paranthisis(cleanedExpression) === false) {
      throw new Error("Invalid Paranthisis");
    }
    
    let opr = [];
    let oprn = [];
    let ind = 0;
    let len = cleanedExpression.length;
    while (ind < len)
    {
      if (cleanedExpression[ind] === '(')
      {
        opr.push(cleanedExpression[ind]);
        ind++;
      }
      else if (cleanedExpression[ind] === ')')
      {
        while (opr[opr.length - 1] !== '(')
        {

          let num2 = oprn.pop();
          let num1 = oprn.pop();
          let oprator = opr.pop();
          let ans = this.opration(num1, num2, oprator);
          oprn.push(ans);
        }
        opr.pop();
        ind++;
      }
      else if (cleanedExpression[ind] == '+' || cleanedExpression[ind] == '-' || cleanedExpression[ind] == '*' || cleanedExpression[ind] == '/')
      {
        while (opr.length > 0 && opr[opr.length - 1] !== '(' && this.precedence(cleanedExpression[ind]) <= this.precedence(opr[opr.length - 1]))
        {
          let num2 = oprn.pop();
          let num1 = oprn.pop();
          let oprator = opr.pop();
          let ans = this.opration(num1, num2, oprator);
          oprn.push(ans);
        }
        opr.push(cleanedExpression[ind]);
      
        ind++;
      }
      else
      {
        let num = '';
        let decimal = 0;
        while (ind < len && (this.isNumber(cleanedExpression[ind]) || cleanedExpression[ind] === '.'))
        {
          num += cleanedExpression[ind] ;
          ind++;
        }
        if(isNaN(parseFloat(num)))
        {
          throw new Error("Invalid Expression");
        }
        oprn.push(parseFloat(num));
      }
    }

    while (opr.length > 0)
    {
      let num2 = oprn.pop();
      let num1 = oprn.pop();
      let oprator = opr.pop();
      let ans = this.opration(num1, num2, oprator);
      oprn.push(ans);
    }

    this.result = oprn.pop();
  }

  isNumber(char)
  {
    return !isNaN(parseFloat(char));
  }

  precedence(char) {
    switch (char) {
      case '+':
        return 1;
      case '-':
        return 1;
      case '*':
        return 2;
      case '/':
        return 2;
      default:
        return 0;
    }
  }

  opration(num1, num2, oprator)
  {
    switch (oprator) {
      case '+':
        return num1 + num2;
      case '-':
        return num1 - num2;
      case '*':
        return num1 * num2;
      case '/':
        if (num2 === 0)
        {
          throw new Error("Divided by zero"); 
        }
        return num1 / num2;
      default:
        return 0;
    }

  }


  add (num) {
    this.result += num;
  }

  subtract (num) {
    this.result -= num;
  }

  multiply (num) {
    this.result *= num;
  }

  divide (num) {
    if(num == 0)
    {
      throw new Error("Divided by zero");
    }
    this.result /= num;
  }

  clear () {
    this.result = 0;
  }

  getResult () {
    return this.result;
  }


}



module.exports = Calculator;
