/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 */

function sleep (miliSec) {
  let startTime = new Date().getTime()
  while (new Date().getTime() - startTime <= miliSec) {}
  console.log('Sleep time= ', (new Date().getTime() - startTime) / 1000)
}

sleep(5000)
