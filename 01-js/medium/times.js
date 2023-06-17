/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
Hint - use Date class exposed in JS
*/

function calculateTime(n){
    var startTime=(Date.now())/1000
    var sum =0
    if (n>0){
        sum =n*(n+1)/2
    }
    var endTime=(Date.now())/1000
    return(endTime-startTime)
}