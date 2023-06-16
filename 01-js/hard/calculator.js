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

  constructor( ){
    this.result = 0;
}

add(a){
    this.result += a;
}

subtract(a){
    this.result -= a;
}

multiply(a){
    this.result *= a;
}

divide(a){
    if (a === 0) {
        throw new Error("Cannot divide by zero");
      }
    this.result /= a;
}
clear(){
    this.result = 0;
}

getResult(){
    return this.result;
}
getPrecedence(operator) {
    switch (operator) {
      case '^':
        return 3;
      case '*':
      case '/':
        return 2;
      case '+':
      case '-':
        return 1;
      default:
        return 0; // for parentheses or other non-operator characters
    }
  }

isNumber(str) {
    return !isNaN(str);
}

postfix(str){
    console.log("In  postfix.................");
    let stack = [];
    let e_string = [];

    for(let i=0; i<str.length; i++){
        // console.log(str[i]);
        //if its an operand( number) add to empty strng
        if( this.isNumber(str[i])){
            // arr[arr.length] = 4
            e_string[e_string.length] = str[i];
        }
        else if(str[i] === '+' || str[i] === '-' || str[i] === '/' || str[i] === '*' || str[i] === '(' || str[i] === ')' ){
            //If the scanned token is an open parenthesis '(', push it onto the stack.
            if(str[i] === '('){
                stack.push(str[i]);
            }
            //If the scanned token is a close parenthesis ')', pop operators from the stack and append 
            //them to the postfix string until an open parenthesis '(' is encountered. Discard the open parenthesis.
            else if(str[i] === ')'){
                while(stack[stack.length - 1] != '('){ ///stack[stack.length - 1]
                    var temp = stack.pop();
                    e_string[e_string.length]= temp;
                }
                stack.pop();
            }
            else{ //If the scanned token is an operator (+, -, *, /, etc.)
                if(stack.length === 0){
                    stack.push(str[i]);
                }
                else{
                    var top_element = stack[stack.length - 1];
                    var i1 = this.getPrecedence(top_element);
                    var j = this.getPrecedence(str[i]);
                    if(j <= i1){ //same or grater precedence
                        while(j <= i1){
                            var temp = stack.pop();
                            e_string[e_string.length] = temp;
                            top_element = stack[stack.length - 1];
                            i1 = this.getPrecedence(top_element);
                        }
                        stack.push(str[i]);
                    }
                    else{ //less precedence
                        stack.push(str[i]);
                    }
                }
            }

        }
        else{
            throw new Error("enter only numbers");
            }
    }
    while(stack.length !=0){
        var temp = stack.pop();
        e_string[e_string.length] = temp;
    }
    console.log(e_string);
    return e_string;

}
calculate(str){
    console.log(str);
    // Remove any white spaces from the expression

    str = str.replace(/\s/g, '');
    var arr = [];

    // Use regular expression to split the expression into individual elements
    var regex = /([\+\-\*\/\(\)])/g;
    var elements = str.split(regex);


    // Iterate through the elements and add them to the array
    for (var i = 0; i < elements.length; i++) {
        var element = elements[i];
    
        // Ignore empty elements
        if (element !== '') {
        arr.push(element);
        }
    }
    
//   console.log(arr);

  var postfix_exp = this.postfix(arr);
  console.log("------"+postfix_exp);

  var stack = [];
  var len = postfix_exp.length;

  stack.push(postfix_exp[0]);
  
  for(var i=1; i<len ;i++){
    if(this.isNumber(postfix_exp[i])){
        stack.push(postfix_exp[i]);
    }
    else{
        var e1 = parseFloat(stack.pop());
        var e2 = parseFloat(stack.pop());
        this.result = e2;

        // console.log(e1+"....."+e2+"....."+this.result);

        // console.log("----"+postfix_exp[i]);

        if(postfix_exp[i] === '+'){
            this.add(e1);
            stack.push(this.result);
        }
        else if(postfix_exp[i] === '-'){

            this.subtract(e1);
            stack.push(this.result);
        }
        else if(postfix_exp[i] === '*'){
            this.multiply(e1);
            stack.push(this.result);
        }
        else if(postfix_exp[i] === '/'){
            this.divide(e1);
            stack.push(this.result);
        }

    }
    
  }
  if(stack.length>1) throw console.error("somethings wrong!!! please check the eq");

return stack[stack.length-1];

}


}

module.exports = Calculator;
