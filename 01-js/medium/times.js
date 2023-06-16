/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
Hint - use Date class exposed in JS
*/

function calculateTime(n) {
    sum=0;
    let start=Date.now();
    for(var i=1;i<=n;i++)
    {
       sum+=i;
    }
    let timeTaken=(Date.now()-start)*0.001;
    return  timeTaken;
}

console.log("Time to calculate sum from 1 to 100: "+calculateTime(100));
console.log("Time to calculate sum from 1 to 100000: "+calculateTime(100000));
console.log("Time to calculate sum from 1 to 1000000000: "+calculateTime(1000000000));