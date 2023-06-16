/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
Hint - use Date class exposed in JS
*/

function calculateTime(n) {
    let startTime = new Date().getSeconds()

    totalsum = 0 ; 
    for(let i = 1 ; i <=n  ; i++){
        totalsum += i ;
    }

    let endtime = new Date().getSeconds();

    timeNeeded = endtime-startTime;
    
    return timeNeeded;
}

const n =10000000;
calculateTime(n)
