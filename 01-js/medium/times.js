/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
Hint - use Date class exposed in JS
*/

function calculateTime(n) 
{
    let startTime = new Date();
  
    // Calculate the sum from 1 to n
    let sum = 0;
    for (let i = 1; i <= n; i++) 
    {
        sum += i;
    }
  
    let endTime = new Date();
  
    // Calculate the time difference in milliseconds
    let timeDiff = endTime - startTime;
  
    // Convert milliseconds to seconds
    let timeInSeconds = timeDiff / 1000;

    return timeInSeconds;    
}

let a = [100, 100000, 1000000000]
for (let j = 0; j < a.length; j++)
    {
        console.log(calculateTime(a[j]));
    }
