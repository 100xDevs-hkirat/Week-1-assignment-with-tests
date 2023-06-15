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

function normalizeExpression(expression) {
  let normalExp=[];
  for(let i=0;i<expression.length;i++){
      let start=-1;
      let end=-1;
      if(expression.charAt(i).charCodeAt(0)>=48 && expression.charAt(i).charCodeAt(0)<=57){
          if(start==-1 && end==-1){
              start=i;
              end=i;
              while(expression.charAt(end+1).charCodeAt(0)>=48 && expression.charAt(end+1).charCodeAt(0)<=57){
                  end++;
              }
          }
          let number=0;
          let diff=0;
          for(let j=end;j>=start;j--){
              let multi=1;
              for(let k=0;k<diff;k++){
                  multi=multi*10;
              }
              number=number+parseInt(expression.charAt(j))*multi;
              diff++;
          }
          if(start!=-1 && end != -1){
              normalExp.push(number);
              i=end;
              continue;
          }
      }
      else if(expression.charAt(i)==" "){
          continue;
      }else if(expression.charAt(i)=="*" || expression.charAt(i)=="+" || expression.charAt(i)=="/" || expression.charAt(i)=="-" ||expression.charAt(i)=="(" ||expression.charAt(i)==")"){
          normalExp.push(expression.charAt(i));
      }else{
          return false;
      }
  }
  return normalExp;
}
let stack=[];
function performOperation(arr) {
  switch (arr[1]) {
      case "+":
          stack.push(arr[0]+arr[2]);
          break;
      case "-":
          stack.push(arr[2]-arr[0]);
          break;
      case "*":
          stack.push(arr[2]*arr[0]);
          break;
      case "/":
          stack.push(arr[2]/arr[0]);
          break;
  }
}

function calculate(normalExp) {
  for(let i=0;i<normalExp.length;i++){
      if(typeof normalExp[i]=='number'){
          stack.push(normalExp[i]);
      }else if(normalExp[i]=="*" ||normalExp[i]=="+" ||normalExp[i]=="-" ||normalExp[i]=="/"||normalExp[i]=="("){
          stack.push(normalExp[i])
      }else if(normalExp[i]==")"){
          let calc=[];
          let element;
          while(element!="("){
              element=stack.pop();
              calc.push(element);
          }
          if(calc.length!=0){
              performOperation(calc);
          }
      }
      
  }
}

function finalCalculation(){
  //check for divison operator
  for(let i=0;i<stack.length;i++){
      if(stack[i]=="/"){
          let calc=[];
          calc.push(stack[i-1]);
          calc.push(stack[i+1]);
          stack[i+1]=calc[0]/calc[1];
          stack.splice(i-1,2);
          i=0;
      }
  }
  //console.log(stack);
  for(let i=0;i<stack.length;i++){
      if(stack[i]=="*"){
          let calc=[];
          calc.push(stack[i-1]);
          calc.push(stack[i+1]);
          stack[i+1]=calc[0]*calc[1];
          stack.splice(i-1,2);
          i=0;
      }
  }
  //console.log(stack);
  for(let i=0;i<stack.length;i++){
      if(stack[i]=="-"){
          let calc=[];
          calc.push(stack[i-1]);
          calc.push(stack[i+1]);
          stack[i+1]=calc[0]-calc[1];
          stack.splice(i-1,2);
          i=0;
      }
  }
  //console.log(stack);
  for(let i=0;i<stack.length;i++){
      if(stack[i]=="+"){
          let calc=[];
          calc.push(stack[i-1]);
          calc.push(stack[i+1]);
          stack[i+1]=calc[0]+calc[1];
          stack.splice(i-1,2);
          i=0;
      }
  }
  //console.log(stack);
}

exp="(   103   +10)*10+(23*6)/2";
//exp="(103/2)/3";
//exp="(102*3)*6*(7*2)*8*9";
function calculator(expression) {
  let normalExp=normalizeExpression(expression);
  if(normalExp==false){
      console.log("Invalid expression");
      return;
  }
  calculate(normalExp);
  finalCalculation();
  console.log(stack[0]);
}
calculator(exp);
/* console.log(stack);
console.log(stack[0]); */

class Calculator {}

module.exports = Calculator;
