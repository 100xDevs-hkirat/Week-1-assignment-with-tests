/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Print how long it took for all 3 promises to resolve.
 */

let waitOneSecond = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve("PromiseOne Resolved"), 1000);
  });
};

let waitTwoSecond = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve("PromiseTwo Resolved"), 2000);
  });
};

let waitThreeSecond = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve("PromiseThree Resolved"), 3000);
  });
};

function calculateTime() {
  const startTime = Date.now();
  let endTime = 0;
  Promise.all([waitOneSecond(), waitTwoSecond(), waitThreeSecond()]).then(
    (results) => {
      console.log(results);
      console.log(
        "Total time taken: ",
        Math.round((Date.now() - startTime) / 1000) + " seconds"
      );
    }
  );
}

calculateTime();
