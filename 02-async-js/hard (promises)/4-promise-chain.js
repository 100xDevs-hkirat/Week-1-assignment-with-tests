/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Print out the time it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
 */

function waitOneSecond() {
  return new Promise(function (resolve) {
    setTimeout(resolve, 1000);
  });
}

function waitTwoSecond() {
  return new Promise(function (resolve) {
    setTimeout(resolve, 2000);
  });
}

function waitThreeSecond() {
  return new Promise(function (resolve) {
    setTimeout(resolve, 3000);
  });
}
var startTime = performance.now();
var endTime;
waitOneSecond().then(
  waitTwoSecond().then(
    waitThreeSecond().then(() => {
      endTime = performance.now();
      console.log("all are executed sequentially in time ->");
      console.log(calculateTime());
    })
  )
);
function calculateTime() {
  return endTime - startTime;
}
