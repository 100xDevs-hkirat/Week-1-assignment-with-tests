/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 */


function sleep (seconds) {
  let timestamp = Date.now() + (seconds * 1000);
  let runTill = new Date(timestamp);

  while (Date.now() < runTill) {
  }

  console.log('Ran after: ', seconds);
}

sleep(30);
