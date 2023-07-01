/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Print how long it took for all 3 promises to resolve.
 */

function waitOneSecond() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("resolved after 1 sec");
    }, 1000);
  });
}

function waitTwoSecond() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("resolved after 2 sec");
    }, 2000);
  });
}

function waitThreeSecond() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("resolved after 3 sec");
    }, 3000);
  });
}

function calculateTime() {
  const start = new Date();
  Promise.all([waitOneSecond(), waitTwoSecond(), waitThreeSecond()])
    .then(() => {
      const end = new Date();
      console.log(`time taken : ${(end - start) / 1000} seconds`);
    })
    .catch((err) => {
      console.log(err);
    });
}

calculateTime();
