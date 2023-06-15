/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 */

function sleep(seconds) {
  const start = Date.now();
  let now = start;
  while (now - start < seconds) {
    now = Date.now();
  }
}

sleep(2000);
console.log("hello");
