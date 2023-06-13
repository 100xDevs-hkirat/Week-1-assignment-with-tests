/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
Hint - use Date class exposed in JS
*/

// The Date class provides methods to retrieve the current date and time, allowing us to measure the time difference before and after the execution of the code.

function calculateTime(n) {
    const startTime = new Date();
     let sum = 0;
     for(let i =0; i<=n; i++){
        sum = sum + 1;
     }
     const endTime = new Date();
     const timeDifference = endTime - startTime ;
     const timeInSeconds = timeDifference/1000;
    return timeInSeconds;
}
