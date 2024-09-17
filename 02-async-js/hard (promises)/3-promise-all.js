/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Print how long it took for all 3 promises to resolve.
 */

function waitOneSecond() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, 1000);
  }).then(() => {
    console.log("Resolved after 1 second");
  });
}

function waitTwoSecond() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, 2000);
  }).then(() => {
    console.log("Resolved after 2 second");
  });
}

function waitThreeSecond() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, 3000);
  }).then(() => {
    console.log("Resolved after 3 second");
  });
}

function calculateTime() {
  let startingTime = new Date().getTime();
  const promise1 = waitOneSecond();
  const promise2 = waitTwoSecond();
  const promise3 = waitThreeSecond();
  Promise.all([promise1, promise2, promise3]).then(() => {
    console.log("All three promises have been resolved");
    let endingTime = new Date().getTime();
    console.log(
      `Time taken for all the three functions to execute = ${
        (endingTime - startingTime) / 1000
      }`
    );
  });
}
calculateTime();
