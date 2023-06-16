/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
Hint - use Date class exposed in JS
*/

function calculateTime(n) {
    const firstPoint = new Date();
    const fp = firstPoint.getTime();
    let y = 0;
    for(let i = 0; i < n; i++)
    { y += i;}
    const secondPoint = new Date();
    const sp = secondPoint.getTime();
    console.log(firstPoint);
    console.log(secondPoint);
    return (sp - fp)/1000;
}
