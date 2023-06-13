/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
Hint - use Date class exposed in JS
*/
function fn(x){
    var StartTime= new Date().getTime();
    let sum=0;
    for(let i=0;i<x;i++){
        sum+=i;
    }
    var EndTime= new Date().getTime();
    var TimeTaken=(EndTime-StartTime);
    return TimeTaken;
}
function calculateTime(n) {
    console.log(fn(n))
    console.log(fn(100))
    console.log(fn(10000))
    console.log(fn(100000000))
    return 0.01;
}

calculateTime(1)