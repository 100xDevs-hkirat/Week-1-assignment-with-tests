/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 */

function sleep(seconds) {
  const startTime = new Date();
  while (new Date() - startTime <= seconds * 1000) {
    //sleep for this time
  }
  return;
}

sleep(5);
