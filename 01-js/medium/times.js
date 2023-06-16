/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100 :- 0
2. Sum from 1-100000:- 0.001
3. Sum from 1-1000000000:- 0.774
Hint - use Date class exposed in JS
*/

function calculateTime(n) {
  var startTime = new Date();

  var sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  var endTime = new Date();
  var enlapsedTime = (endTime - startTime) / 1000;
  return enlapsedTime;
}

console.log(calculateTime(100));
console.log(calculateTime(100000));
console.log(calculateTime(1000000000));
