/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 */

function sleep (seconds) {
    const start = new Date().getTime(); // Get the current time
  
    while (true) {
      const current = new Date().getTime(); // Get the current time in each iteration
      if (current - start >= seconds*1000) {
        break; // Break the loop when the desired sleep duration has elapsed
      }
    }
}

sleep(5)
console.log("Hello world")