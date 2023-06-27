/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
Hint - use Date class exposed in JS
*/
function calculateSumTime(n) {
  const startTime = new Date().getTime(); 
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }

  const endTime = new Date().getTime(); 
  const totalTimeInSeconds = (endTime - startTime) / 1000;

  return totalTimeInSeconds;
}

// Example usage:
console.log(calculateSumTime(100)); // Calculate sum from 1 to 100
console.log(calculateSumTime(100000)); // Calculate sum from 1 to 100000
console.log(calculateSumTime(1000000000)); // Calculate sum from 1 to 1000000000
