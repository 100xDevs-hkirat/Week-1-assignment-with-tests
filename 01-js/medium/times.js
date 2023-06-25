/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
Hint - use Date class exposed in JS
*/

function calculateTime(n) {

    let start = Date.now();
    sum(n);
    let timeTaken = Date.now() - start;
    return timeTaken;
}

function sum(n)
{
    let totalSum = 0;
    for(let i=1; i<=n; i++)
    {
        totalSum += i;
    }
    console.log(totalSum);
    return totalSum;
}

console.log(calculateTime(100))