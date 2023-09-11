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
  const elapsedTime = endTime - startTime;
  return elapsedTime / 1000; // Convert milliseconds to seconds
}

const n1 = 100;
const n2 = 100000;
const n3 = 1000000000;

console.log(
  `Time taken for sum from 1 to ${n1}: ${calculateSumTime(n1)} seconds`
);
console.log(
  `Time taken for sum from 1 to ${n2}: ${calculateSumTime(n2)} seconds`
);
console.log(
  `Time taken for sum from 1 to ${n3}: ${calculateSumTime(n3)} seconds`
);
