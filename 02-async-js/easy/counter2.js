// <!-- ## Counter without setInterval

// Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.
//  -->

let n = prompt("Enter time in seconds");

function countWithDelay(counter, delay) {
  setTimeout(() => {
    console.clear();
    console.log(counter);
    counter++;
    
    if (counter <= n) {
      countWithDelay(counter, delay);
    }
  }, delay);
}

// Start the counter
countWithDelay(0, 1000);









































































// (Hint: setTimeout)