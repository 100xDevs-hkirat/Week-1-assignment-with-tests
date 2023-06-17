/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Print out the time it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
 */

function waitOneSecond() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, 1000);
  });
}

function waitTwoSecond() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, 2000);
  });
}

function waitThreeSecond() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, 3000);
  });
}

function calculateTime() {
  const startTime = new Date().getTime();

  waitOneSecond()
    .then(() => waitTwoSecond())
    .then(() => waitThreeSecond())
    .then(() => {
      const endTime = new Date().getTime();
      const elapsed = endTime - startTime;
      console.log(`Elapsed time: ${elapsed} ms`);
    })
    .catch((error) => {
      console.error("An error occurred:", error);
    });
}

calculateTime();
