/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
Hint - use Date class exposed in JS
*/

function calculateTime(n) {
    let sum = 0;
    let startTime = new Date();
    for(let i = 1;i<=n;i++){
        sum += i;
    }
    let endTime = new Date();
    let time = startTime - endTime;
    console.log("sum = ", sum);
    return time;
}
let t1 = calculateTime(100);
console.log('Time = ', t1/1000, 'seconds');
let t2 = calculateTime(100000);
console.log('Time = ', t2/1000, 'seconds');
let t3 = calculateTime(1000000000);
console.log('Time = ', t3/1000, 'seconds');