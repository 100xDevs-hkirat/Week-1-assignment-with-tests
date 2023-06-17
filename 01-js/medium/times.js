/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
Hint - use Date class exposed in JS
*/

function calculateTime(n) {
    // Start the timer
    const startTime = new Date();

    var result = 0;
    for(var i = 1; i <= n; i++) {
        result += i;
    }

    // End the timer
    const endTime = new Date();

    const timeElapsed = endTime - startTime;

    // Return the time elapsed in seconds.
    return timeElapsed / 1000;
}

console.log("Time required to sum 1-100: ", calculateTime(100));

console.log("Time required to sum 1-100000: ", calculateTime(100000));

console.log("Time required to sum 1-1000000000: ", calculateTime(1000000000));