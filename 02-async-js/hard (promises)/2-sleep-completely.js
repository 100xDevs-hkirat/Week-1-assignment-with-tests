/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 */

function sleep(delay) {
  return new Promise((resolve) => setTimeout(resolve, delay));
}

async function delayedExecution() {
  console.log("Start");
  await sleep(5000);
  console.log("This message came after 5 seconds");
  console.log("End");
}

delayedExecution();
