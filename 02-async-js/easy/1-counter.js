// <!-- ## Create a counter in JavaScript

// We have already covered this in the second lesson, but as an easy recap try to code a counter in Javascript
// It should go up as time goes by in intervals of 1 second -->


let counter = 0;

function updateCounter() {
  console.clear(); // Clear console for better visibility
  console.log(`Counter: ${counter}`);
  counter++;
}

// Update the counter every second (1000 milliseconds)
const intervalId = setInterval(updateCounter, 1000);

// Stop the counter after 10 seconds
setTimeout(() => {
  clearInterval(intervalId);
  console.log('Counter stopped.');
}, 10000); // Stop after 10000ms (10 seconds)
