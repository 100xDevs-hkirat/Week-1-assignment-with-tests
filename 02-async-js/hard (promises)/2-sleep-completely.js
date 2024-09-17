/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 */

function sleep(seconds) {
  let time = new Date().getTime();
  while (new Date().getTime() - time < 1000 * seconds) {}
}

console.log("Before sleep");
sleep(10);
console.log("After sleep");
