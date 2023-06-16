let count = 0;

function startCounter() {
  count++;
  console.log(count);
  setTimeout(startCounter, 1000);
}

// Start the counter
startCounter();
