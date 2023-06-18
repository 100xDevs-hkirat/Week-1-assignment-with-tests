/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 */

function sleep(seconds) {
  const start = Date.now();
  console.log("I am going to be busy");
  while (Date.now() - start < seconds * 1000) {}
  console.log("I am not busy now");
}

sleep(3);
