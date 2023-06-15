/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 */

function sleep(seconds) {
  setTimeout(() => {
    console.log(`Js thread is free now after ${seconds} seconds`);
  }, 1000);
  const startDate = Date.now();
  while (Date.now() - startDate < seconds * 1000) {
    console.log("JS thread is busy");
  }
}
sleep(10);
