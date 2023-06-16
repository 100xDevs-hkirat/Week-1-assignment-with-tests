/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
Hint - use Date class exposed in JS
*/

function calculateTime(n) {
  const iterations = 10000; // Number of iterations to run the loop
  let totalExecutionTime = 0;

  for (let i = 0; i < iterations; i++) {  //difference between the start and end time is too small to be measured accurately in milliseconds. To overcome this, I am runing the loop multiple times to increase the duration and then calculating the average time.
    const startTime = new Date();

    let sum = 0;
    for (let j = 1; j <= n; j++) {
      sum += j;
    }

    const endTime = new Date();
    const executionTime = endTime - startTime;
    totalExecutionTime += executionTime;
  }

  const averageTimeInSeconds = totalExecutionTime / iterations / 1000;
  return averageTimeInSeconds;
}

var sol = calculateTime(100);
console.log(sol);