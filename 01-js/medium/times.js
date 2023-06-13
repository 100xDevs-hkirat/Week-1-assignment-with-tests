/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100 :-0
2. Sum from 1-100000 :-0.005
3. Sum from 1-1000000000 :-23.303
Hint - use Date class exposed in JS
*/

function calculateTime(n) {
    var sum=0;
    for(let i=1;i<=n;i++)
    {   
        sum=sum+i;
    }
    return sum;
}
var startTime=new Date().getTime();
const a=calculateTime(10000000000);
var endTime=new Date().getTime();
console.log((endTime-startTime)/1000);