/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Print how long it took for all 3 promises to resolve.
 */
function waitOneSecond() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Promise 1 started");
    }, 1000);
  });
}

function waitTwoSecond() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Promise 2 done");
    }, 2000);
  });
}

function waitThreeSecond() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("wait three done");
    }, 3000);
  });
}

function calculateTime() {
  const startTime = new Date();
  return Promise.all([waitOneSecond(), waitTwoSecond(), waitThreeSecond()])
    .then((result) => {
      const endTime = new Date();
      console.log(`the took for calculation ${endTime - startTime}`);
      console.log("Resolved", result);
    })
    .catch((error) => {
      console.log(error);
    });
}

calculateTime();
