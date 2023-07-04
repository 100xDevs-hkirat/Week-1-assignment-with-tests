/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
Hint - use Date class exposed in JS
*/

function calculateTime(n) {
  const start = new Date();
  let ans;
  for (let i = 1; i <= n; i++) {
    ans = ans + i;
  }
  const end = new Date();
  return Timer(start, end);
}
function Timer(start, end) {
  const startTime = start;
  const endTime = end;

  const timeDifference = endTime.getTime() - startTime.getTime();

  // Converting to different units
  const seconds = Math.floor(timeDifference / 1000); // Difference in seconds

  return `${timeDifference} milliseconds and ${seconds} seconds`;
}

console.log(calculateTime(100000000));
console.log(calculateT(1000000000));
