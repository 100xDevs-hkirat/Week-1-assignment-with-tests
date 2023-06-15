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
   constructor()
  {
      this.result=0;
  }
  add(n)
  {
if(typeof n!=='number')
throw new Error("INVALID INPUT! PLZ ENTER A NUMBER");
else
this.result+=n;
  }
  subtract(n)
  {
      if(typeof n!=='number')
      throw new Error("INVALID INPUT! PLZ ENTER A NUMBER");
      else
      this.result-=n;
  }
  multiply(n)
  {
      if(typeof n!=='number')
      throw new Error("INVALID INPUT! PLZ ENTER A NUMBER");
      else
      this.result*=n;
  }
  divide(n)
  {
      if(typeof n!=='number')
      throw new Error("INVALID INPUT! PLZ ENTER A NUMBER");
      else if(n===0)
      throw new Error("DIVISION BY ZERO");
else
      this.result/=n;
  }
clear()
{
  this.result=0;
}
getResult()
{
  return this.result;
}
calculate(expression) {
  if (typeof expression !== 'string') {
    throw new Error('Invalid input. String expected.');
  }

  // Remove continuous spaces from the expression
  expression = expression.replace(/\s+/g, '');

  // Validate the expression
  if (!/^[0-9+\-*/().\s]+$/.test(expression)) {
    throw new Error('Invalid expression.');
  }

  try {
    this.result=eval(expression)
    if(!isFinite(this.result))
    throw new Error()

  } catch (error) {
    throw new Error('Error occurred while evaluating the expression.');
  }
}
}
const calc = new Calculator();

calc.add(5); // Add 5 to the result
console.log(calc.getResult()); 
calc.multiply(3); 
console.log(calc.getResult()); 
calc.subtract(7); // Subtract 7 from the result
console.log(calc.getResult()); // Output: 8
calc.divide(2); // Divide the result by 2
console.log(calc.getResult()); // Output: 4
calc.clear(); // Clear the result
console.log(calc.getResult()); // Output: 0
calc.calculate('10 + 2 * (6 - (4 + 1) / 2) + 7');
console.log(calc.getResult())
module.exports = Calculator;
