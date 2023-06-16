/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
Hint - use Date class exposed in JS
*/

let num = 0;
function calculateTime(n){
for(let i=1;i<=n;i++){
num=num+i;
  
}
  return num;
}

let startTime = new Date();
calculateTime(n);
let endTime = new Date();

let timeElapsed = endTime - startTime;
console.log(timeElapsed);

