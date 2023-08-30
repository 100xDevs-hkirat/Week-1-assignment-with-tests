/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Print how long it took for all 3 promises to resolve.
 */

function waitOneSecond() {
  return new Promise((resolve) =>
    setTimeout(() => {
      resolve(`Resolved after 1 `);
    }, 1 * 1000)
  );
}

function waitTwoSecond() {
  return new Promise((resolve) =>
    setTimeout(() => {
      resolve(`Resolved after 2 `);
    }, 2 * 1000)
  );
}

function waitThreeSecond() {
  return new Promise((resolve) =>
    setTimeout(() => {
      resolve(`Resolved after 3 `);
    }, 3 * 1000)
  );
}

function calculateTime() {
  const startTime = new Date();
  const promise1 = waitOneSecond();
  const promise2 = waitTwoSecond();
  const promise3 = waitThreeSecond();

  Promise.all([promise1, promise2, promise3])
    .then((result) => {
      const endTime = new Date();
      console.log("All are Resilved", result);
      console.log((endTime - startTime) / 1000);
    })
    .catch((error) => {
      console.log("Not solved", error);
    });
}

calculateTime();
