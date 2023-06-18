/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
Hint - use Date class exposed in JS
*/

function sumTime(n){
    var s=0;
    for(let i=0;i<=n;i++){
        s+=i
    }
    return s;
}

function calculateTime(n) {
    var startTime= Date.now()
    sumTime(n)
    var endTime=Date.now()
    return (endTime-startTime)/1000;
}

console.log("Time taken for sum from 1-100 is "+calculateTime(100)+"sec")

console.log("Time taken for sum from 1-100000 is "+calculateTime(100000)+"sec")

console.log("Time taken for sum from 1-1000000000 is "+calculateTime(1000000000)+"sec")