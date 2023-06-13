/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
Hint - use Date class exposed in JS
*/

function calculateTime(n) {
      // Get the start time
      let startTime = performance.now();
    
      // Calculate the sum from 1 to n
      let sum = 0;
      for (let i = 1; i <= n; i++) {
        sum += i;
      }
    
      // Get the end time
      let endTime = performance.now();
    
      // Return the difference between the start and end times
      return endTime - startTime;
    }
    
    let n = [100, 1000, 10000];
    
    for (let i = 0; i < n.length; i++) {
      let time = calculateTime(n[i]);
      console.log(`${i+1} The time it took to calculate the sum from 1 to ${n[i]} is ${time} seconds.`);
    }