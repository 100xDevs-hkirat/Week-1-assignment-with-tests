/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
Hint - use Date class exposed in JS
*/

function calculateTime(n) {
    var startTime = new Date()
    var startResInSec = startTime.getTime()/1000
    //return 0.01;
    var sum=0
    for(var i=1;i<=n;i++){
        sum+=i
    }
    var endTime = new Date()
    var endResInSec = endTime.getTime()/1000
    return endResInSec-startResInSec
}

calculateTime(1000000000)