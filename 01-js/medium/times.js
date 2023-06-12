/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
Hint - use Date class exposed in JS
*/

function timeDifferenceInSeconds(start, end) {
  // Convert the dates to milliseconds
  const startMs = start.getTime();
  const endMs = end.getTime();

  // Calculate the time difference in milliseconds
  const timeDiffMs = endMs - startMs;

  // Convert the time difference in milliseconds to seconds
  const timeDiffSecs = timeDiffMs / 1000;

  // Return the time difference in seconds
  return timeDiffSecs;
}

function calculateTime(n) {
  const start = new Date().getTime();
  let sum = 0;
  for (let i = 1; i <= n; i++) sum += i;
  const end = new Date().getTime();

  return (end - start) / 1000;
}

console.log(calculateTime(1000000));
