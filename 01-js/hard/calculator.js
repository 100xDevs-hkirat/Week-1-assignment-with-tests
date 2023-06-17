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
    this.result = 0
    this.stack = []
    // this.top = -1
  }

  add(num){
    this.result +=num
  }

  subtract(num){
    this.result -= num
  }

  divide(num){
    this.result /= num
  }

  multiply(num){
    this.result *= num
  }

  clear(){
    this.result = 0
  }

  getResult(){
    return this.result
  }

  tokenize(str){
    let tokenized = []
    let i = 0
    const len = str.length
    while(i<len){
      if(!isNaN(str[i])){
        let num = str[i]
        i++
        while(i<len && !isNaN(str[i])){
          num += str[i]
          i++
        }
        i--
        tokenized.push(parseInt(num))
      }else{
        if(str[i]=="+" || str[i]=="-" || str[i]=="/" || str[i]=="*" || str[i]=="(" || str[i]==")"){
          tokenized.push(str[i])
        }else{
          return -1
        }
      }
      i +=1
    }
    return tokenized
  }

  precedence(str){
    switch(str){
      case "(":
        return 1;
        break;
      case "+":
      case "-":
        return 2;
        break
      case "*":
      case "/":
        return 3
        break;
    }
  }

  calculate(str){

    const tokenized = this.tokenize(str)
    if(tokenized == -1){
      throw "error"
    }
    tokenized.push(")")

    let out=[]
    let operators =["("]
    
    for(let i = 0; i< tokenized.length ; i++){
      if(!isNaN(tokenized[i])){
        let last = operators.pop()
        if(this.precedence(last)>= this.precedence(tokenized[i])){
          while(this.precedence(last)>= this.precedence(tokenized[i])){
            out.push(last)
            last = operators.pop()
          }
          operators.push(last)
        }
          operators.push(tokenized[i])
        
        
      }else if(tokenized[i]=="("){
        operators.push("(")
      }else if(tokenized[i]==")"){
        let item = operators.pop()
        while(item != "("){
          out.push(item)
          item = operators.pop()
        }

      }else{
        out.push(tokenized[i])
      }
    }
    console.log(out)
    
  }

  performOper(oper){
    switch(oper){
      case "+":
        break;
      case "-":
        break;
      case "/":
        break;
      case "*":
        break;
      default:
        throw "wrong"
    }
  }
}

const c1 = new Calculator()
c1.calculate("3 * 4 + 1")

module.exports = Calculator;
