/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
Hint - use Date class exposed in JS
*/

function calculateTime(n) {
    var start_time = new Date().getTime();
    var count =0;


    for(var i=1; i<=n ; i++){
        count += i;
    }

    var end_time = new Date().getTime();
    const td = (end_time - start_time)/1000;

    return td;
}