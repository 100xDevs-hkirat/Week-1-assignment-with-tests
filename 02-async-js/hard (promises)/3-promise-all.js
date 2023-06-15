/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Print how long it took for all 3 promises to resolve.
 */

function waitOneSecond() {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve("First Function"), 1000);
  });
}

function waitTwoSecond() {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve("Second Function"), 2000);
  });
}

function waitThreeSecond() {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve("Third Function"), 3000);
  });
}

function calculateTime() {
  const startDate = Date.now();
  return Promise.all([waitOneSecond(), waitTwoSecond(), waitThreeSecond()])
    .then((values) =>
      console.log(
        `All promises resolved in ${((Date.now() - startDate) / 1000).toFixed(
          1
        )} seconds`
      )
    )
    .catch((err) => console.log("error", err));
}
calculateTime();
