/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Print out the time it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
 */

//copied from assignment 1-promisify-setTimeout
function wait(n) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, n);
  });
}

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
  const curr = Date.now();
  return Promise.resolve()
    .then(waitOneSecond)
    .then(waitTwoSecond)
    .then(waitThreeSecond)
    .then(() =>
      console.log("Time taken for operation:  ", (Date.now() - curr) / 1000)
    );
}
