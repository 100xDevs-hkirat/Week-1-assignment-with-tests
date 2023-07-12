/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
Hint - use Date class exposed in JS
*/



// await functionToBeMeasured();
function calculateTime(n) {
    let a = 0
    for(let i=1; i<=n; i++){
        a+=i
    }
}
const start = new Date().getTime();
calculateTime(10000000)
const end = new Date().getTime();
console.log((end-start)/1000)
