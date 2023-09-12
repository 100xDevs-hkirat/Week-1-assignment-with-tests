/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
Hint - use Date class exposed in JS
*/

function calculateTime(n) {
    const before = new Date()
    let p1 = 1;
    let sum = 0;
    while (p1 <= n){
        sum = sum+ p1;
        p1++;
    }
    const after = new Date()
    return (after - before)/1000
}

const time100 = calculateTime(100)
const time1000 = calculateTime(100000)
const time10000 = calculateTime(1000000000)

console.log(time100, time1000, time10000)