/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Print out the time it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
 */

function waitOneSecond() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("1 sec completed.");
    }, 1000);
  });
}

function waitTwoSecond() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("2 sec completed.");
    }, 2000);
  });
}

function waitThreeSecond() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("3 sec completed.");
    }, 3000);
  });
}

function calculateTime() {
  const startTime = new Date().getTime();
  let endTime = "";
  waitOneSecond().then((result) => {
    console.log("1 sec Completed Now. Calling the waitTwoSecond()");
    waitTwoSecond().then((result) => {
      console.log("2 sec Completed Now. Calling waitThreeSecond()");
      waitThreeSecond().then((result) => {
        console.log("3 sec Completed now.");
        endTime = new Date().getTime();
        console.log("Total time taken : ", endTime - startTime);
      });
    });
  });
}

calculateTime();
