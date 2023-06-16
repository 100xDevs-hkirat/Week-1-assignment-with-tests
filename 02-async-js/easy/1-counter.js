let count = 0;

function startCounter() {
  count++;
  console.log(count);
}

// Start the counter
const interval = setInterval(startCounter, 1000);
