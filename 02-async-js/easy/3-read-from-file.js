/* Reading the contents of a file

Write code to read contents of a file and print it to the console. 
You can use the fs library to as a black box, the goal is to understand async tasks. 
Try to do an expensive operation below the file read and see how it affects the output. 
Make the expensive operation more and more expensive and see how it affects the output. */

const fs = require("fs");
function arrow(err,input){
  if (err){
    throw err;
  } 
  console.log(input.toString());
}
fs.readFile('sample.txt',"utf-8",arrow);

var sums = 0;
function sum(){
  for (let i = 0 ; i < 1000000000; i++){
    sums += i;
  }
  console.log(sums);
}
setTimeout(sum, 10000)

var s = 0
function sum1(){
  for (let i = 0 ; i < 100; i++){
    s += i;
  }
  console.log(s);
}
sum1();


