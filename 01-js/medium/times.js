/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
Hint - use Date class exposed in JS
*/
function calculateSum(to){
    let sum=0;
    for(let i=1; i<=to; i++){
        sum = sum+i
    }
    return sum
}

function calculateTime(n) {
    let startTime = Date.now()
    calculateSum(n)
    let timeTaken = Date.now()-startTime
    return new Date(timeTaken).getTime()/1000
}
console.log(calculateTime(1000000000))