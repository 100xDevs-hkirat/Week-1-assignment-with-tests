/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Print out the time it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
 */

function waitPromise(seconds) {
  return new Promise((res) => {
    setTimeout(() => {
      res(`Waited ${seconds} second(s)`);
    }, seconds * 1000);
  });
}

function waitOneSecond() {
  return waitPromise(1);
}

function waitTwoSecond() {
  return waitPromise(2);
}

function waitThreeSecond() {
  return waitPromise(3);
}

function calculateTime() {
  const startTime = new Date();

  waitOneSecond()
    .then(() => waitTwoSecond())
    .then(() => waitThreeSecond())
    .then(() => {
      const endTime = new Date();
      const timeDuration = (endTime - startTime) / 1000; // Convert to seconds
      console.log(`Promise chain resolved in ${timeDuration} seconds`);
    });
}

calculateTime();
