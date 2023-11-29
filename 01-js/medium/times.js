/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
Hint - use Date class exposed in JS
*/
function sum(n) {
  if (n == 1) return;
  let sum = 1;
  for (let i = 2; i <= n; i++) {
    sum += i;
  }
}

function calculateTime(n) {
  let start = Date.now();
  sum(n);
  return Date.now() - start;
}
