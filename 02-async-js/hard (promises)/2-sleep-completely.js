/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 */

function sleep(seconds) {
  return new Promise((resolve) => {
    const milliseconds = seconds * 1000;
    const startTime = Date.now();
    while (Date.now() - startTime < milliseconds) {
      // Busy-waiting loop
    }
    resolve();
  });
}

console.log("Before sleep");
sleep(3).then(() => {
  console.log("After sleep");
});

console.log("blocked for the fn to finish");
