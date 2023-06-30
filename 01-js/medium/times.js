/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
Hint - use Date class exposed in JS
*/

function calculateTime(n) {
  let start = Date.now();
  let sum = 0;
  for (let i = 0; i <= n; i++) {
    sum += i;
  }
  console.log(sum);
  let time = Date.now() - start;
  return console.log(`Time taken to execute is: ${time / 1000}`);
}

calculateTime(100);
calculateTime(100000);
calculateTime(1000000000);