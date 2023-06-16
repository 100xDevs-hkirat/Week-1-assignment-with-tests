/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 */

function sleep(seconds) {
  return new Promise((res) => {
    setTimeout(res, seconds);
  });
}

async function temp() {
  console.log("I got the thread");
  await sleep(3000);
  console.log("Got thread after three seconds...");
}
temp();
