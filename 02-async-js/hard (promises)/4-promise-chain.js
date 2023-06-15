/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Print out the time it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
 */

function waitOneSecond() {
  return new Promise((result, reject) => {
    setTimeout(result, 1000);
  });
}

function waitTwoSecond() {
  return new Promise((result, reject) => {
    setTimeout(result, 2000);
  });
}

function waitThreeSecond() {
  return new Promise((result, reject) => {
    setTimeout(result, 3000);
  });
}

function calculateTime() {
  const startTime = new Date();

  waitOneSecond()
    .then(() => waitTwoSecond())
    .then(() => waitThreeSecond())
    .then((result) => {
      console.log("result", result);
      const endTime = new Date();
      console.log(
        `Time took to run all promise is ${endTime - startTime} milisecond`
      );
    })
    .catch((error) => {
      console.log("error", error);
    });
}

calculateTime();

/* Q: Compare it with the results from 3-promise-all.js
Ans: 3-promise-all took 3002 milisecond and 4-promise-chain took 6026 milisecond */
