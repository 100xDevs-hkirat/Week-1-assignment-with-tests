/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
Hint - use Date class exposed in JS
*/

function calculateTime(n) {
    let start = new Date();

    let sum = 0;
    for(let i = 1; i <= n; i++) {
        sum += i;
    }

    let end = new Date();

    return (end - start)/1000;
}

console.log(`Time taken for (1-100) sum: ${calculateTime(100)}`);
console.log(`Time taken for (1-100000) sum: ${calculateTime(100000)}`);
console.log(`Time taken for (1-1000000000) sum: ${calculateTime(1000000000)}`);