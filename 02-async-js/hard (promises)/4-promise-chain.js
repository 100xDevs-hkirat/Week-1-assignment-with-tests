/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Print out the time it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
 */

const wait = require('./1-promisify-setTimeout');

function waitOneSecond() {
  return wait(1000);
}

function waitTwoSecond() {
  return wait(2000);
}

function waitThreeSecond() {
  return wait(3000);
}

function calculateTime() {
  let startTime = Date.now();
  waitOneSecond().then(() =>
    waitTwoSecond().then(() =>
      waitThreeSecond().then(() => {
        console.log('All promises resolved');
        let timeTaken = (Date.now() - startTime) / 1000;
        console.log(
          `Time took to complete all promises is ${timeTaken} seconds`
        );
      })
    )
  );
}

calculateTime();
