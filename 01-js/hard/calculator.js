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
          this.result=0;
        }
        add(a){
            this.result+=a;
            return this.result
        }
        subtract(a){
          this.result-=a;
          return this.result;
        }
        multiply(a){
          this.result*=a;
          return this.result;
        }
        divide(a){
          if(a===0){
            throw new Error('Division not possible');
          }
          else{
            this.result/=a;
            return this.result;
          }
        }
        clear(){
          this.result=0;
          return this.result;
        }
        getResult(){
          return this.result;
        }
        calculate(str) {
          const s = str.replace(/\s/g, "");
          const stack = [];
        
          for (let i = 0; i < s.length; i++) {
            const c = s[i];
        
            if (c === "(") {
              stack.push(c);
            } else if (c === ")") {
              if (stack.length === 0 || stack.pop() !== "(") {
                throw new Error('Invalid expression: Unbalanced parentheses');
              }
            }
          }
        
          if (stack.length !== 0) {
            throw new Error('Invalid expression: Unbalanced parentheses');
          }
          console.log(s)
          this.result = eval(s); 
          if (isNaN(this.result) || !isFinite(this.result)) {
            throw new Error('Invalid expression: Division by zero');
          }
        
          return this.result;
        }
        

}
const calculator = new Calculator();


const sum = calculator.add(5);
console.log(sum); 
try {
  const result = calculator.calculate('(2.5 + 1.5) * 3');
  console.log(result);
} catch (error) {
  console.error(error.message);
}
module.exports = Calculator;
