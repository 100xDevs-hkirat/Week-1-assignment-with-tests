/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
Hint - use Date class exposed in JS
*/

function calculateTime(n) {
    
    const start = Date.now();
    console.log(start);

    function sum() {
      let total = 0;
      for (let i = 1; i <= n; i++) {
        total += i;
      }
      return total;
    }
  
    sum();
  
    const end = Date.now();
  
    return (end - start) / 1000;

}



for (let i = 10; i <= 10_000_000_000; i *= 10) {
    console.log(`${calculateTime(i).toFixed(2)} secs for sum from 1 to ${i}`);
  }