/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Print how long it took for all 3 promises to resolve.
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
  const promises = [waitOneSecond(), waitTwoSecond(), waitThreeSecond()];
  const startTime = new Date();
  return Promise.all(promises).then(() => {
    const endTime = new Date();
    const timeDuration = (endTime - startTime) / 1000; // Convert to seconds
    console.log(`All promises resolved in ${timeDuration} seconds`);
  });
}

calculateTime();
