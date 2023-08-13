/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
Hint - use Date class exposed in JS
*/

function calculateTime(n) {
    let initialDate = new Date();

    let sum = 0;
    for(let i=1; i<=n ;i++){
        sum+=i
    }
    let finalDate = new Date();

    let time = (finalDate.getTime() - initialDate.getTime()) / 1000;

    console.log("Sum is : " + sum);
    console.log("Calculation time : " + time + " s");

    return time;
}

calculateTime(100)
calculateTime(100000)
calculateTime(3000000000)
