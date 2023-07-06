/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Print how long it took for all 3 promises to resolve.
 */

const wait = require('./1-promisify-setTimeout');

function waitOneSecond() {
  return wait(1000);
}

function waitTwoSecond() {
  return wait(3000);
}

function waitThreeSecond() {
  return wait(3000);
}

function calculateTime() {
  let startTime = Date.now();
  Promise.all([waitOneSecond(), waitTwoSecond(), waitThreeSecond()]).then(
    () => {
      console.log('All promises resolved');
      let timeTaken = (Date.now() - startTime) / 1000;
      console.log(`Time took to complete all promises is ${timeTaken} seconds`);
    }
  );
}

calculateTime();
