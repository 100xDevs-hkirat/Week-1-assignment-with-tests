

var math = require('mathjs');
class Calculator {
  constructor(){
  this.result=0;
  }
 add(number){
  this.result+=number
}
 subtract(number){
  this.result-=number;
}
multiply(number){
  this.result*=number;
}
divide(number){
  if(number==0)
  throw new Error("invalid number");
  this.result/=number;
}
clear(){
  this.result=0;
} 
getResult(){
  return this.result; 
}
calculate(str){
  var calculate =str.replace(/\s+/g,'');

  if (/[^0-9+\-*/().\s]/.test(calculate)) {
    throw new Error('non numeric characters in the expression');
  }

  const divisionByZeroPattern = /\/\s*0/g;
var boolean = divisionByZeroPattern.test(calculate);
if(boolean==true)
throw new Error("division by 0 not allowed");
  
else{
  this.result = math.evaluate(calculate); 
    return this.result;
  }
}


}
module.exports = Calculator;
