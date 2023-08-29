/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Print out the time it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
 */

function waitOneSecond() {
  return new Promise((resolve) =>
    setTimeout(() => {
      resolve("Resolved after 1 Sec");
    }, 1 * 1000)
  );
}

function waitTwoSecond() {
  return new Promise((resolve) =>
    setTimeout(() => {
      resolve("Resolved after 2 Sec");
    }, 2 * 1000)
  );
}

function waitThreeSecond() {
  return new Promise((resolve) =>
    setTimeout(() => {
      resolve("Resolved after 3 Sec");
    }, 3 * 1000)
  );
}

function calculateTime() {
  const startTime = new Date();

  waitOneSecond();
  waitTwoSecond();
  waitThreeSecond();

  const endTime = new Date();

  console.log("Time taken -", (endTime - startTime) / 1000);
}

calculateTime();
