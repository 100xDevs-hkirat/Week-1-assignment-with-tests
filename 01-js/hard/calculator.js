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
  }

  add(n) {
    this.result += n
  }

  subtract(n) {
    this.result -= n
  }

  multiply(n) {
    this.result *= n
  }

  divide(n) {
    this.result /= n
  }

  clear(n) {
    this.result = 0
  }

  getResult(n) {
    return this.result;
  }

  calculate(expression){
    expression = expression.split(" ").join("");
    let arr = []
    let currStr = ""
    for(let i=0; i< expression.length; i++){
      if(expression[i] == " "){
        if(currStr.length > 0){
          let num = Number(currStr)
          arr.push(num)
          currStr = ""
        }
        continue
      }
      else if(expression[i] >= '0' && expression[i] <= '9'){
        currStr += expression[i]
      }
      else{
        if(currStr.length > 0){
          let num = Number(currStr)
          arr.push(num)
          currStr = ""
        }
        arr.push(expression[i])
      }
    }
  
    if(currStr.length > 0){
      let num = Number(currStr)
      arr.push(num)
      currStr = ""
    }
  
    let valArr=[]
    let opeArr=[]
    //console.log(arr)
  
    for(let i=0; i< arr.length; i++){
      if(typeof arr[i] == "number"){
        valArr.push(arr[i])
      }
      else{
        if(arr[i] == "("){
          opeArr.push(arr[i])
        }
  
        else if(arr[i] == "+" || arr[i] == "-"){
          if(opeArr.length == 0 || (opeArr.length != 0 && opeArr[opeArr.length - 1] == "(")){
            opeArr.push(arr[i])
          }
          else if(opeArr[opeArr.length - 1] == "+" || opeArr[opeArr.length - 1] == "-"){
            let ope = opeArr[opeArr.length - 1]
            opeArr.pop()
            let rope = valArr[valArr.length - 1]
            let lope = valArr[valArr.length - 2]
            valArr.pop()
            valArr.pop()
            if(ope == "+"){
              valArr.push(rope + lope)
            }
            else{
              valArr.push(lope - rope)
            }
  
            opeArr.push(arr[i])
          }
  
          else{
            let ope = opeArr[opeArr.length - 1]
            opeArr.pop()
            let rope = valArr[valArr.length - 1]
            let lope = valArr[valArr.length - 2]
            valArr.pop()
            valArr.pop()
            if(ope == "*"){
              valArr.push(rope * lope)
            }
            if(ope == "/"){
              if(rope == 0){
                throw new Error('division by zero!');
              }
              valArr.push(lope/ rope)
            }
            if(opeArr.length == 0 || (opeArr.length != 0 && opeArr[opeArr.length - 1] == "(")){
              opeArr.push(arr[i])
            }
            else if(opeArr[opeArr.length - 1] == "+" || opeArr[opeArr.length - 1] == "-"){
              let ope = opeArr[opeArr.length - 1]
              opeArr.pop()
              let rope = valArr[valArr.length - 1]
              let lope = valArr[valArr.length - 2]
              valArr.pop()
              valArr.pop()
              if(ope == "+"){
                valArr.push(rope + lope)
              }
              else{
                valArr.push(lope - rope)
              }
    
              opeArr.push(arr[i])
            }
          }
        }
  
        else if(arr[i] == "*" || arr[i] == "/"){
          if(opeArr.length == 0 || (opeArr.length != 0 && opeArr[opeArr.length - 1] == "(")){
            opeArr.push(arr[i])
          }
          else if(opeArr[opeArr.length - 1] == "+" || opeArr[opeArr.length - 1] == "-"){
            opeArr.push(arr[i])
          }
  
          else{
            let ope = opeArr[opeArr.length - 1]
            opeArr.pop()
            let rope = valArr[valArr.length - 1]
            let lope = valArr[valArr.length - 2]
            valArr.pop()
            valArr.pop()
            if(ope == "*"){
              valArr.push(rope * lope)
            }
            if(ope == "/"){
              if(rope == 0){
                throw new Error('division by zero!');
              }
              valArr.push(lope/ rope)
            }
            opeArr.push(arr[i])
          }
        }
  
        else if(arr[i] == ")"){
           while(opeArr[opeArr.length - 1] != "("){
            let ope = opeArr[opeArr.length - 1]
            opeArr.pop()
            if(opeArr.length == 0){
              throw new Error('expression with invalid parentheses!');
            }
            let rope = valArr[valArr.length - 1]
            let lope = valArr[valArr.length - 2]
            valArr.pop()
            valArr.pop()
            if(ope == "*"){
              valArr.push(rope * lope)
            }
            else if(ope == "/"){
              if(rope == 0){
                throw new Error('division by zero!');
              }
              valArr.push(lope/rope)
            }
            else if(ope == "+"){
              valArr.push(rope + lope)
            }
            else {
              valArr.push(lope - rope)
            }
            // console.log(valArr)
            // console.log(opeArr)
           }
           opeArr.pop()
           
        }
  
        else{
          throw new Error('Not a Valid Expression!');
        }
  
  
      }
      // console.log(valArr)
      // console.log(opeArr)
    }

    if(opeArr.length == valArr.length){
      throw new Error('expression with invalid parentheses!');
    }
  
    while(opeArr.length != 0){
            let ope = opeArr[opeArr.length - 1]
            opeArr.pop()
            let rope = valArr[valArr.length - 1]
            let lope = valArr[valArr.length - 2]
            valArr.pop()
            valArr.pop()
            if(ope == "*"){
              valArr.push(rope * lope)
            }
            else if(ope == "/"){
              if(rope == 0){
                throw new Error('division by zero!');
              }
              valArr.push(lope/ rope)
            }
            else if(ope == "+"){
              valArr.push(rope + lope)
            }
            else{
              valArr.push(lope - rope)
            }
    }
    
    //console.log(valArr[0])
    //console.log(5/2)
    this.result = valArr[0]
  }


}

module.exports = Calculator;
