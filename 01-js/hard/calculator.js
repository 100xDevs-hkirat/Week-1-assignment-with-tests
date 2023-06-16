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
    if (num != 0) {
      this.result /= num;
    } else
      throw new Error("divinding with zero is not possible");
  }

  clear() {
    this.result = 0;
  }

  getResult() {
    return this.result;
  }

  calculate(str) {
    // i get a string with spaces and arithmetic ops and 
    //if i get invalid characters needs to throw an error
    //mission1 : need to know wether string had unwantted chars
    // what are those ,characters except [0-9,(,),{,},[,]]
    //const regex = /^[ \d+\*-(){}/\s]+$/
    const regex = /^[ \d+\*\-.(){}\/\s]+$/;


    if (!regex.test(str)) {
      throw new Error("string contain invalid characters");
    }

    //now we assure that string has no unwnted characters:
    //mission 2; needs remove spaces from string;

    const newString = str.replace(/[ ]/g, '');
    console.log(newString);

    //now our string is free of spaces 
    //now string basically in this form 22+(23*2)/5(+3
    //mission 3:divide the string into array of numbers and signs ex:[22,+,(,23,*,2,),/,5,(,+,3]
    //using regex we can do this

    let arr = newString.match(/(\d+|\+|\-|\*|\/|\(|\))/g
    );
    console.log(arr);

    //now we need to calculate the expression;
    try {
      // Evaluate the expression using eval()
      if (newString.includes('/0')) {
        throw new Error('Division by zero is not allowed');
      }
      this.result = eval(newString);

    } catch (error) {
      throw new Error('Error calculating expression');
    }


  }
}




module.exports = Calculator;
