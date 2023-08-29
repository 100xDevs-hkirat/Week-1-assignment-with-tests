/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 */


function sleep(seconds) {
  console.log("start");
  const startTime = Date.now();

  while (Date.now() - startTime < seconds) {
    console.log("ticking");
    console.clear();
  }

  console.log("end");
}

sleep(500);