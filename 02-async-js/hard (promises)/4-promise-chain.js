/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Print out the time it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
 */
const wait = require("./1-promisify-setTimeout");
function waitOneSecond() {
  const promise = new Promise((resolve) => wait(1).then(resolve));
  return promise;
}

function waitTwoSecond() {
  const promise = new Promise((resolve) => wait(2).then(resolve));
  return promise;
}

function waitThreeSecond() {
  const promise = new Promise((resolve) => wait(3).then(resolve));
  return promise;
}

function calculateTime() {
  const startTime = Date.now();
  waitOneSecond()
    .then(waitTwoSecond)
    .then(waitThreeSecond)
    .then(() => {
      const endTime = Date.now();
      const totalTime = (endTime - startTime) / 1000;
      console.log(`All promises resolved after ${totalTime} seconds`);
    });
}

calculateTime();
