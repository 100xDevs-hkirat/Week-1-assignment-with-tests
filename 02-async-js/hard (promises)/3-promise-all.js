/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Print how long it took for all 3 promises to resolve.
 */

function waitOneSecond() {
  new Promise((resolve) => {
    console.log("After 1 second");
    setTimeout(resolve, 1000);
  });
}

function waitTwoSecond() {
  new Promise((resolve) => {
    console.log("After 2 second");
    setTimeout(resolve, 2000);
  });
}

function waitThreeSecond() {
  new Promise((resolve) => {
    console.log("After 3 second");
    setTimeout(resolve, 3000);
  });
}

function calculateTime() {
  const startTime = Date.now();
  return Promise.all([
    waitOneSecond(),
    waitTwoSecond(),
    waitThreeSecond(),
  ]).then(() => {
    const endTime = Date.now();
    const diff = endTime - startTime;
    console.log(`Promises resolved in ${diff} in milliseconds`);
  });
}

calculateTime();
