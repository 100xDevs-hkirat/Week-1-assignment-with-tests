/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Print out the time it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
 */

function waitOneSecond() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Hi, The promise is resolved in 1 sec"), 1000);
  });
}

function waitTwoSecond() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Hi, The promise is resolved in 2 seconds"), 2000);
  });
}

function waitThreeSecond() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Hi, The promise is resolved in 3 seconds"), 3000);
  });
}

function resolveAll() {
  return waitOneSecond()
    .then(() => waitTwoSecond())
    .then(() => waitThreeSecond());
}

function calculateTime() {
  const startTime = new Date();
  resolveAll()
    .then(() => {
      const endTime = new Date();
      console.log(
        `It took ${
          (endTime - startTime) / 1000
        } seconds to resolve all the promises`
      );
    })
    .catch(() => {
      console.log("There has been error in resolving promises");
    });
}

calculateTime();
