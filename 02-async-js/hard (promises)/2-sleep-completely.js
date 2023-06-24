/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 */

function sleep(seconds) {
  const start = Date.now();
  while (Date.now() - start < seconds * 1000) {}
}
console.log("hello");
sleep(2);
console.log("bye ");
