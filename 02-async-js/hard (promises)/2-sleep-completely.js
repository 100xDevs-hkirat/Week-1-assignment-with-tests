/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 */

function sleep(seconds) {
  const now = Date.now();
  console.log("starting");
  while (Date.now() - now < seconds * 1000) {
    console.log("waiting");
  }
  console.log("done");
}

sleep(3);
