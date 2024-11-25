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

    add(num) {
        this.result += num;
    }

    subtract(num) {
        this.result -= num;
    }

    multiply(num) {
        this.result *= num;
    }

    divide(num) {
        if (num == 0) {
            throw new Error("Division by zero");
        }
        this.result /= num;    
        
    }

    clear() {
        this.result = 0;
    }

    getResult() {
        return this.result;
    }

    calculate(str) {
        let numbersSt = [], symbolsSt = [], paranthesisCnt = 0;
        for (let i = 0; i < str.length;) {
            if (str[i] == ' ') {
                ++i;
            } else if (isNumber(str[i])) {
                let completeNumber = str[i++];
                while (isNumber(str[i])) {
                    completeNumber += str[i++];
                }
                if (str[i] == '.') {
                    completeNumber += str[i]; ++i;
                    while (isNumber(str[i])) {
                        completeNumber += str[i++];
                    }
                }
                //parse float can be used on both integers and floats.
                numbersSt.push(parseFloat(completeNumber));
                //push to numbers stack
            } else if (str[i] == '(') {
                //push to symbols stack
                paranthesisCnt++;
                symbolsSt.push(str[i++]);
            } else if (str[i] == ')') {
                while (symbolsSt.length > 0 && symbolsSt[symbolsSt.length - 1] != '(') {
                    let num2 = numbersSt.pop(), num1 = numbersSt.pop(), op = symbolsSt.pop();
                    numbersSt.push(cal(num1, num2, op));
                }
                if (symbolsSt.length == 0) {
                    throw new Error("Invalid paranthesis")
                }
                symbolsSt.pop();
                ++i;
            } else if (isOperator(str[i])) {
                while (symbolsSt.length > 0 && symbolsSt[symbolsSt.length-1] !='(' && priority(symbolsSt[symbolsSt.length-1]) >= priority(str[i])) {
                    let num2 = numbersSt.pop(), num1 = numbersSt.pop(), op = symbolsSt.pop();
                    numbersSt.push(cal(num1, num2, op));
                }
                symbolsSt.push(str[i]);
                ++i;
            } else {
                throw new Error("Unknown character")
            }
        }
        while (symbolsSt.length > 0) {
            if (symbolsSt[symbolsSt.length - 1] == '(') {
                throw new Error("Invalid paranthesis")
            }
            let num2 = numbersSt.pop(), num1 = numbersSt.pop(), op = symbolsSt.pop();
            numbersSt.push(cal(num1, num2, op));
        }
        this.result = numbersSt.pop();
    }

}

function isNumber(ch) {
    return !isNaN(ch);
}

function isOperator(ch) {
    if (ch == '*' || ch == '/' || ch == '+' || ch == '-') {
        return true;
    }
    return false;
}

function cal(a, b, op) {
    switch (op) {
        case '*':
            return a * b;
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '/':
            if (b == 0) {
                throw new Error("Division by zero")
            }
            return a/ b;
        default:
            return 0;
        
    }
}

function priority(op) {
    if (op == '*' || op == '/')
        return 2;
    else if (op == '-' || op == '+')
        return 1;
    else
        return 0;
}
module.exports = Calculator;
