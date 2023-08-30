// ## Counter without setInterval

// Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.




let seconds = 0;

function updateTimer() {
  console.clear(); // Clear console for better visibility
  console.log(`Timer: ${seconds} seconds`);
  seconds++;
  setTimeout(updateTimer, 1000); // Call updateTimer again after 1000ms (1 second)
}

// Start the timer
updateTimer();



































































// (Hint: setTimeout)