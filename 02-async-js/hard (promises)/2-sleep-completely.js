/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 */

function sleep (seconds) {

    const milliseconds=seconds * 1000;
    const startTime = Date.now();
    while (Date.now() - startTime < milliseconds) {
      // Blocking the main thread
      console.log("Thread Busy");
    }

    console.log("Thread Free");
}

sleep(2);