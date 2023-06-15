/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
Hint - use Date class exposed in JS
*/

function calculateTime(n) {
    let startTime = Date.now();
    let sum = (n*(n+1))/2;
    let endTime = Date.now();

    console.log("sum : "+sum);
    console.log("Time taken (in milliseconds) : "+(endTime-startTime));
    return (endTime-startTime)/1000; // to return duration in seconds
}

calculateTime(1000000000);