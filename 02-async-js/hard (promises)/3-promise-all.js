/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Print how long it took for all 3 promises to resolve.
 */

function waitOneSecond() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Promise resolved after 1 second");
    }, 1000);
  });
}

function waitTwoSecond() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Promise resolved after 2 seconds");
    }, 2000);
  });
}

function waitThreeSecond() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Promise resolved after 3 seconds");
    }, 3000);
  });
}

function calculateTime() {
  const startTime = performance.now();

  Promise.all([waitOneSecond(), waitTwoSecond(), waitThreeSecond()])
    .then((results) => {
      const endTime = performance.now();
      const totalTime = endTime - startTime;
      console.log("All promises resolved");
      console.log("Results:", results);
      console.log("Total time taken:", totalTime, "ms");
    })
    .catch((error) => {
      console.error("An error occurred:", error);
    });
}

calculateTime();
