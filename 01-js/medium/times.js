/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
Hint - use Date class exposed in JS
*/

function calculateTime(n) {
    let currTimeInMilliSeconds = new Date().getTime()
    const StartTimeInSeconds = Math.floor(currTimeInMilliSeconds)
    
    for (var i=1 , sum = 0 ; i<n ; i++) sum += i ;

    currTimeInMilliSeconds = new Date().getTime()
    const timeElapsedInSeconds = Math.floor(currTimeInMilliSeconds) 
    return timeElapsedInSeconds - StartTimeInSeconds

}

console.log(calculateTime(1000000) + " ms") 