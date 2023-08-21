/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Print how long it took for all 3 promises to resolve.
 */

function waitOneSecond() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("First finished");
    }, 1000);
  });
}

function waitTwoSecond() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Second finished");
    }, 2000);
  });
}

function waitThreeSecond() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Third finished");
    }, 3000);
  });
}

function calculateTime() {
  const startTime = Date.now(); // Record the start time

  Promise.all([waitOneSecond(), waitTwoSecond(), waitThreeSecond()])
    .then((res) => {
      // Calculate the elapsed time
      const endTime = Date.now();
      const time = endTime - startTime;

      console.log(res);
      console.log(`All promises resolved in ${time} ms`);
    })
    .catch((error) => {
      console.error("An error occurred:", error);
    });
}
calculateTime();
