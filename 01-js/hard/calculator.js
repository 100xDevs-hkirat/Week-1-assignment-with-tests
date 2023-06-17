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
  result = 0;
  Calculator(result) {
    this.result = result;
  }

  clear() {
    this.result = 0;
    return;
  }

  getResult() {
    return this.result;
  }
  
  findPreviousNumber(s,idx){
    var i = idx;
     var number = "";
     var decimal = false;
     while (i >= 0 && ((s[i] >= '0' && s[i] <= '9') || s[i] === '.')) {
        number = s[i] + number;
        i--;
     }
     return parseFloat(number);
  }

 findNextNumber(s,idx){
   var i = idx;
   var number = "";
   while (i < s.length && ((s[i] >= '0' && s[i] <= '9') || s[i] === '.')) {
        number += s[i];
        i++;
   }
  
    return {nextNumber: parseFloat(number), nextIdx : i-1};
}

 multiply(a){
    this.result*=a;
}
  divide(a) {
    if (a === 0) throw Error('INVALID');
   this.result /= a;
}
 subtract(a){
   this.result -= a;
}
 add(a){
   this.result += a;
}
 performOperation(symbol,a,b){
   if(symbol === "*") return a*b;
   if (symbol === "/") {
     if (b === 0) throw new Error('INVALID EXPRESSION');
     return a / b;
   }
    if(symbol === "+") return a+b;
    if(symbol === "-") return a-b;
}

  compute(s) {
    var ans = 0;
    var t = [];
    var data = this.findNextNumber(s,0)
    t.push(data.nextNumber);
    for(var i = data.nextIdx+1; i < s.length; i++){
        if(s[i] === '*' || s[i] === '/'){
            var num1 = t[t.length-1];
            data = this.findNextNumber(s,i+1);
            var num2 = data.nextNumber;
            var resNum = this.performOperation(s[i],num1,num2);
            t.pop();
            t.push(resNum);
            i = data.nextIdx;
        }
        else if(s[i] === '+' || s[i] === '-'){
            t.push(s[i]);
        }
        else{
             data = this.findNextNumber(s,i);
             t.push(data.nextNumber);
             i =  data.nextIdx;
        }
    }
    ans = t[0];
    for(var i = 1; i < t.length; ++i){
        if(t[i] === '+' || t[i] === '-'){
            var num2 = t[i+1];
            ans = this.performOperation(t[i],ans,num2);
        }
    }
    return ans;
  }
  checkValidParenthesis(s) {
    var open = 0, closed = 0;
    for (var i = 0; i < s.length;++i){
      if (s[i] === '(') open++;
      if (s[i] === ')') closed++;
      if (closed > open) return false;
    }
    if (open != closed) return false;
    return true;
  }
  calculate(s) {
    if (s.length === 0) {
      this.result = 0;
      return;
    }
    for (var i = 0; i < s.length; ++i)
      if (!(s[i] >= "0" && s[i] <= "9") && !"+-*/(). ".includes(s[i]))
        throw new Error(`invalid non numerical characters`);
    
    // Step 1: Remove spaces from whole string.
    var t = "";
    for (var i = 0; i < s.length; ++i){
      if (s[i] != ' ') t += s[i];
    }
    if (!this.checkValidParenthesis(t)) {
      throw new Error('INVALID EXPRESSION');
    }
    t = '('+t+')'
    // Step 2: creating a stack of in bw string and brackets.
    var stack = [];
    for (var i = 0; i < t.length; ++i){
      var st = "";
      var j = i;
      while (i < t.length && t[i] != '(' && t[i] != ')') {
        st += t[i];
          i++;
      }
      if (j != i) {
        i--;
        if (stack.length > 0 && stack[stack.length - 1] != '(' && stack[stack.length - 1] != ')') stack[stack.length - 1] += st;
        else
        stack.push(st);
        continue;
      }
      else if (t[i] === '(') {
        stack.push(t[i]);
        continue;
      }
      if (t[i] === ')') {
        if (stack.length === 0) throw Error(`INVALID EXPRESSION`);
        if (stack[stack.length - 1] === '(') {
          stack.pop();
          continue;
        }
        if (stack.length - 2 < 0 || stack[stack.length - 2] != '(') throw Error(`INVALID EXPRESSION`);
        var val = this.compute(stack[stack.length - 1]);
        stack.pop();
        stack.pop();
        if (stack.length > 0 && stack[stack.length - 1] != '(' && stack[stack.length - 1] != ')') stack[stack.length - 1] += val.toString();
        else
        stack.push(val.toString());
      }
    }
    
    this.result = parseFloat(stack[0]);
    return stack[0];
  }
}
module.exports = Calculator;