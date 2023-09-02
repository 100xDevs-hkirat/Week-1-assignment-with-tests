/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
Hint - use Date class exposed in JS
*/

function calculateTime(n) {
   var currentDate=new Date();
    sum=0;
    for(i=0;i<n;i++){
        sum+=i;
    }
    var timeNow=new Date();
    var time= timeNow-currentDate
    console.log(time);
}