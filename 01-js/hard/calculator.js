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
op = new Set()
op.add("+");
op.add("-");
op.add("*");
op.add("/")
br = new Set();
br.add('(');
br.add(')');
function add(x, y) {
  x = Number(x);
  y = Number(y);
  return x + y;
}
function sub(x, y) {
  x = Number(x);
  y = Number(y);
  return x - y;
}
function multiply(x, y) {
  x = Number(x);
  y = Number(y);
  return x * y;
}
function divide(x, y) {
  x = Number(x);
  y = Number(y);
  if (y === 0) {
    throw new Error("Cannot divide by zero");
  }
  return x / y;
}
function Split(exp) {
  let i = 0;
  res = []
  while (i < exp.length) {
    if((!isNaN(exp[i]) && exp[i] != " ") || exp[i] == '.'){
      let q = "";
      while((!isNaN(exp[i]) && exp[i] != " ") || exp[i] == '.'){
        q = q + exp[i]
        i = i + 1
      }
      res.push(q)
    }
    else if (op.has(exp[i]) || br.has(exp[i])) {
      res.push(exp[i])
      i = i + 1;
    }
    else if (exp[i] == " ") {
      i = i + 1;
    }
    else {
      res.push(exp[i])
      i = i + 1;
    }
  }
  return res;
}
function verify(exp) {
  for (let o of exp) {
    if (isNaN(o) && !op.has(o) && !br.has(o)) {
      console.log(o)
      return false;
    }
  }
  return true;
}
function cleanElseThrow(exp) {
  arr = Split(exp)
  if (verify(arr)) {
    arr.unshift('(');
    arr.push(')');
    return arr;
  }
  else {
    throw new Error();
  }
}
function calExpFP(exp) {
  let res = [];
  let i = 0;
  while (i < exp.length) {
    if (exp[i] === "*") {
      res[res.length - 1] = multiply(res[res.length - 1], exp[i + 1]);
      i = i + 2;
    } else if (exp[i] === "/") {
      res[res.length - 1] = divide(res[res.length - 1], exp[i + 1]);
      i = i + 2;
    } else {
      res.push(exp[i]);
      i = i + 1;
    }
  }
  return res;
}

function calExpSP(exp) {
  let res = [];
  let i = 0;
  while (i < exp.length) {
    if (exp[i] === "+") {
      res[res.length - 1] = add(res[res.length - 1], exp[i + 1]);
      i = i + 2;
    } else if (exp[i] === "-") {
      res[res.length - 1] = sub(res[res.length - 1], exp[i + 1]);
      i = i + 2;
    } else {
      res.push(exp[i]);
      i = i + 1;
    }
  }
  return res;
}

function calExp(exp) {
  exp = calExpFP(exp);
  exp = calExpSP(exp);
  return exp[0];
}
function resExp(exp) {
  let res = [];
  for (let i = 0; i < exp.length; i++) {
    if (exp[i] === ')') {
      let a = [];
      while (res[res.length - 1] !== '(') {
        a.push(res[res.length - 1]);
        res.pop();
      }
      a.reverse();
      res[res.length - 1] = calExp(a);
    } else {
      res.push(exp[i]);
    }
  }
  return res[0];
}

function areParenthesesBalanced(str) {
  const stack = [];
  const openingBrackets = ['(', '[', '{'];
  const closingBrackets = [')', ']', '}'];

  for (let i = 0; i < str.length; i++) {
    const char = str[i];

    if (openingBrackets.includes(char)) {
      stack.push(char);
    } else if (closingBrackets.includes(char)) {
      const matchingOpeningBracket = openingBrackets[closingBrackets.indexOf(char)];

      if (stack.length === 0 || stack.pop() !== matchingOpeningBracket) {
        return false;
      }
    }
  }

  return stack.length === 0; 
}



class Calculator {
  constructor(){
    this.result = 0;
  }
  add(n){
    this.result += n; 
  }
  subtract(n){
    this.result -= n;
  }
  multiply(n){
    this.result *= n;
  }
  divide(n){
    if(n == 0){
      throw new Error();
    }
    this.result /= n;
  }
  clear(){
    this.result = 0;
  }
  getResult(){
    return this.result;
  }
  calculate(str){
    if(areParenthesesBalanced(str)){
    this.result = resExp(cleanElseThrow(str));
    }else{
      throw new Error();
    }
  }
}
poip = new Calculator();
console.log(poip.calculate('(2.5 + 1.5) * 3'));
module.exports = Calculator;
