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
    if(num ==0){
      throw new Error()
    }
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
    let para = 0
    let tokenized = []
    let i = 0
    const len = str.length
    while(i<len){
      if(str[i]==" "){
        i++
        continue 
      }else if(!isNaN(str[i])){
        // console.log(str[i])
        let num = str[i]
        i++
        while(i<len && (!isNaN(str[i]) || str[i]==".")){
          num += str[i]
          i++
        }
        i--
        tokenized.push(parseFloat(num))
      }
      else{
        if(str[i]=="+" || str[i]=="-" || str[i]=="/" || str[i]=="*"|| str[i]=="(" || str[i]==")"){
          if(str[i]=="("){
            para +=1}
          else if(str[i]==")"){
            if(para == 0){
              throw new Error()
            }
            para -=1
          }
          tokenized.push(str[i])
        }else{
          return -1
        }
      }
      i +=1
    }
    if( para !=0){
      return -1
    }
    return tokenized
  }

  precedence(str){
    switch(str){
      case "(":
        return 1;
      case "+":
      case "-":
        return 2;
      case "*":
      case "/":
        return 3
    }
  }

  evaluate(out){
    let operand = []
    let i =0;
    while(i<out.length){
      if(!isNaN(out[i])){
        operand.push(out[i])
      }else{
        const num2 = operand.pop()
        const num1 = operand.pop()
        if(out[i]=="/" && num2 == 0){
          throw new Error()
        }
        operand.push(this.performOper(out[i], num1, num2))
      }
      i++
    }
    return operand.pop()
  }

  calculate(str){
    let tokenized = this.tokenize(str)
    console.log(tokenized)
    if(tokenized == -1){
      throw new Error()
    }
    tokenized.push(")")

    let out=[]
    let operators =["("]

    for(let i = 0; i< tokenized.length ; i++){
      if(!isNaN(tokenized[i])){
        out.push(tokenized[i])
        
        
      }else if(tokenized[i]=="("){
        operators.push("(")
      }else if(tokenized[i]==")"){
        let item = operators.pop()
        while(item != "("){
          out.push(item)
          item = operators.pop()
        }

      }else{
        let last = operators.pop()
        if(this.precedence(last)>= this.precedence(tokenized[i])){
          while(this.precedence(last)>= this.precedence(tokenized[i])){
            out.push(last)
            last = operators.pop()
          }
          
        }
          operators.push(last)
          operators.push(tokenized[i])
        
      }
    }
    this.result =  this.evaluate(out)
    console.log(this.result)
    return this.result
    
  }

  performOper(oper,num1, num2){
    switch(oper){
      case "+":
        return num1 + num2
      case "-":
        return num1 - num2
      case "/":
        return num1 / num2
      case "*":
        return num1 * num2
    }
  }
}

const c1 = new Calculator()
c1.calculate("(2.5 + 1.5) * 3")

module.exports = Calculator;
