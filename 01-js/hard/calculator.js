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
  constructor(){
    this.result = 0;
  }

  add(num){
    this.result += num;
  }

  subtract(num){
    this.result -= num;
  }

  multiply(num){
    this.result *= num;
  }

  divide(num){
    if(num === 0) throw new Error();
    this.result /= num;
  }

  clear(){
    this.result = 0;
  }

  getResult(){
    return this.result;
  }

  calculate(expression){
    expression = expression.replace(/\s+/g, ''); // remove spaces
    let stack = [];
    let openBracketPositions = []; // contains positions of open brackets in the stack
    let i = 0;
    while(i < expression.length){
      let char = expression.charAt(i);
      console.log(char)
      if(this.isInvalid(char)) throw new Error();
      
      if(this.isOperator(char)){
        if(stack.length === 0) throw new Error();
        if(stack.length !== 0 && this.isOperator(stack[stack.length-1])) throw new Error();// top of stack is also operator
        stack.push(char);
        i++;
      }else if(this.isOperand(char)){
        let data = this.getCompleteOperand(i,expression); // gets the complete operand since a num can be more than a digit
        i = data.j;
        let num = data.num;

        // If the top of the stack is '*' or '/' resolve the expression immediately since these operators have higher precedence
        while(stack.length !== 0 && (stack[stack.length-1] === '*' || stack[stack.length-1] === '/')){
          let operatorInStack = stack.pop();
          let operandInStack = stack.pop();
          num = this.solve(operandInStack, operatorInStack, num);
        }
        
        stack.push(num);
      }else{
        if(char === '('){
          if(stack.length != 0 && this.isOperand(stack[stack.length-1])){
            throw new Error();
          }
          stack.push(char);
          openBracketPositions.push(stack.length-1);
          i++;
        }else{ // closing bracket
          if(openBracketPositions.length === 0){
            throw new Error();
          }

          let openBracketPosition = openBracketPositions.pop();
          let expResult = this.getExpressionResult(openBracketPosition, stack); // get the result of complete expression between this closing bracket and the most recent opening bracket
          
          // If the top of the stack is '*' or '/' resolve the expression immediately since these operators have higher precedence
          while(stack.length != 0 && (stack[stack.length-1] === '*' || stack[stack.length-1] === '/')){
            let operatorInStack = stack.pop();
            let operandInStack = stack.pop();
            expResult = this.solve(operandInStack, operatorInStack, expResult);
          }
  
          stack.push(expResult);
          i++;
        }
      }

    }

    // Calculate the result of the remaining expression in the stack
    while(stack.length > 1) {
      if(stack.length === 2) throw new Error();
      let operand2 = stack.pop();
      let operator = stack.pop();
      let operand1 = stack.pop();
      let result = this.solve(operand1, operator, operand2);
      stack.push(result);
    }
    this.result = stack.pop();
  }

  getExpressionResult(openBracketPosition, stack){
    let j = stack.length-1;
    while(j-openBracketPosition > 2){
      let operand2 = stack.pop();
      let operator = stack.pop();
      let operand1 = stack.pop();

      let result = this.solve(operand1,operator,operand2);
      stack.push(result);
      j = stack.length-1;
    }

    let finalResult = stack.pop();
    stack.pop(); // remove the open bracket
    return finalResult;
  }

  solve(operand1, operator, operand2){
    console.log(`Inside solve method ${operand1},${operator},${operand2}`);
    operand1 = operand1*1; // convert to number from string
    operand2 = operand2*1; // convert to number from string
    console.log(`Inside solve method ${operand1},${operator},${operand2}`);

    if(operator === '*'){
      return operand1 * operand2;
    }
    if(operator === '+'){
      return operand1 + operand2;
    }
    if(operator === '/'){
      if(operand2 == 0) throw new Error();
      return operand1 / operand2;
    }
    if(operator === '-'){
      return operand1 - operand2;
    }
  }

  getCompleteOperand(index, expression){
    let j = index;
    while(j < expression.length){
      let char = expression.charAt(j);
      if(this.isOperand(char) || char === '.'){
        j++;
      }else{
        break;
      }
    }

    return {
      j:j,
      num:expression.substring(index,j)
    };
  }

  isOperand(char){
    let operandRegex = /^[0-9]$/;
    return operandRegex.test(char);
  }

  isOperator(char){
    return char === '+' || char === '-' || char === '*' || char === '/';
  }

  isInvalid(char){
    return !(this.isOperand(char) || this.isOperator(char) || char === '(' || char === ')');
  }
}

module.exports = Calculator;
