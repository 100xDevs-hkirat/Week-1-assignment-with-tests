/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Print how long it took for all 3 promises to resolve.
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
  const currTime = Date.now();
  return Promise.all([
    waitOneSecond(),
    waitTwoSecond(),
    waitThreeSecond(),
  ]).then(() => console.log("Time taken: ", (Date.now() - currTime) / 1000));
}
