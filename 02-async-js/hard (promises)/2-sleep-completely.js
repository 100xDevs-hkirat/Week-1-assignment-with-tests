/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 */

function sleep(milliseconds) {
  const start = Date.now();
  while (Date.now() - start < milliseconds) {
    // Busy-wait until the specified time has passed
  }
}
console.log("Before sleep");

sleep(2000); // Sleep for 2000 milliseconds (2 seconds)

console.log("After sleep");
