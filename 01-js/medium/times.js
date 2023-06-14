/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
Hint - use Date class exposed in JS
*/

function calculateTime(n) {
    var sum = 0;
    for (var i = 1; i <= n; i++){
        sum += i;
    }
    return sum;
}

function time(n) {
    var startTime = performance.now();
    console.log(calculateTime(n));
    var endTime = performance.now();

    var runtime = endTime - startTime;
    return  "sum:" + calculateTime(n) + " Runtime: " + runtime + " milliseconds";
}

console.log(time(100))
console.log(time(100000))
console.log(time(1000000000))