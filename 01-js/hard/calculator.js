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
  result;
  constructor(){
     this.result=0;
  }

   add(number){
     this.result+=number;

   }
   subtract(number){
    this.result-=number;
   }
   multiply(number){
    this.result*=number;
   }
   divide(number){
    if(number==0){
      throw new Error("cannot divide by zero");
    }
     this.result=this.result/number;
   }

  clear(){
    this.result=0;
    return this.result;
  }
  getResult(){
    return this.result;
  }
  calculate(s){
    
  let ans=[];

  
  let result = 0;
  let number = 0;
  let sign = 1;
  for(let i = 0; i < s.length; i++){
      let c = s.charAt(i);
      if(!isNaN(c)){
          number = 10 * number + (c - '0');
      }else if(c == '+'){
          result += sign * number;
          number = 0;
          sign = 1;
      }else if(c == '-'){
          result += sign * number;
          number = 0;
          sign = -1;
      }else if(c == '('){
          //we push the result first, then sign;
          ans.push(result);
          ans.push(sign);
          //reset the sign and result for the value in the parenthesis
          sign = 1;   
          result = 0;
      }else if(c == ')'){
          result += sign * number;  
          number = 0;
          result *= ans.pop();    
          result += ans.pop();   
          
      }else if(c>='a' && c<='z'){
        throw new Error("input is invalid");
        return;
      }
  }
  if(number != 0) result += sign * number;
  return result;


     

  

  }


}

module.exports = Calculator;
