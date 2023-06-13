/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
Hint - use Date class exposed in JS
*/

function calcSum(n) {
    let sum = 0;
    for (let idx = 1; idx <= n; idx++) {
      sum += idx;
    }
    return sum;
  }
  
  function calculateTime(n) {
    let startTime = Date.now();
    calcSum(n);
    let endTime = Date.now();
    let timeTaken = endTime - startTime;
    console.log(timeTaken + 'ms');
    return timeTaken;
  }
  
  
  module.exports = calculateTime;
  