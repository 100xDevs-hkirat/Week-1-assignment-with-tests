/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 */

function sleep(seconds) {
  const start = Date.now() / 1000;
  while (Date.now() / 1000 - start < seconds) {
    // this halts the thread
  }

  // the same logic using Promise
  // return new Promise((resolve) => {
  //   setTimeout(resolve, seconds * 1000);
  // });
}

// function call for while loop logic
sleep(3);

// function call for Promise logic
// sleep(3).then(() => {
//   console.log('busy wait done!');
// });
