/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
Hint - use Date class exposed in JS
*/

function calculateTime(n) {
  const beforeUnixTime = Math.floor(Date.now()/1000);

  sum = 0;
  for (let i = 0; i <= n; i++) {
    sum += 1;
  }

  const afterUnixTime = Math.floor(Date.now()/1000);

  time = afterUnixTime - beforeUnixTime;
  return time;
}

const ans = calculateTime(10000000000);
console.log(ans);
