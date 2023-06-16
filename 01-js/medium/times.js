/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
Hint - use Date class exposed in JS
*/


function calculateSumTime(n) {
    const startTime = performance.now();
  
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
  
    const endTime = performance.now();
    const timeInSeconds = (endTime - startTime) / 1000;
  
    return timeInSeconds;
}

// Example usage
const time1 = calculateSumTime(100);
console.log(`time for sum from 1 to 100: ${time1} seconds`);

const time2 = calculateSumTime(100000);
console.log(`Time for sum from 1 to 100000: ${time2} seconds`);

const time3 = calculateSumTime(1000000000);
console.log(`Time for sum from 1 to 1000000000: ${time3} seconds`);
