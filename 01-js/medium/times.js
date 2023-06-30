/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
Hint - use Date class exposed in JS
*/

function calculateTime(n) {
    let date = new Date();
    let startTime = date.getTime();
    console.log("Start Time: " + startTime);
    let answer = 0;
    for(let i = 1; i <= n; i++){
        answer += i;
    }
    console.log(answer);
    date = new Date();
    let endTime = date.getTime();
    console.log("End Time: " + endTime);
    const timeTaken = endTime - startTime;
    console.log(timeTaken)
    return timeTaken/1000;
}

console.log(calculateTime(2000000000));