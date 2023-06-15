/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Print how long it took for all 3 promises to resolve.
 */

function waitOneSecond() {
  const startTime = Date.now();
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      const endTime = Date.now();
      resolve(`resolved in ${(endTime - startTime) / 1000} sec`);
    }, 1000);
  });
  return promise;
}

function waitTwoSecond() {
  const startTime = Date.now();
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      const endTime = Date.now();
      resolve(`resolved in ${(endTime - startTime) / 1000} sec`);
    }, 2000);
  });
  return promise;
}

function waitThreeSecond() {
  const startTime = Date.now();
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      const endTime = Date.now();
      resolve(`resolved in ${(endTime - startTime) / 1000} sec`);
    }, 3000);
  });
  return promise;
}

function calculateTime() {
  const startTime = Date.now();
  const promises = [waitOneSecond(), waitTwoSecond(), waitThreeSecond()];
  Promise.all(promises)
    .then((data) => {
      const endTime = Date.now();
      console.log(data);
      console.log(`Final resolution took ${(endTime - startTime) / 1000} secs`);
    })
    .catch((err) => console.error(err));
}
calculateTime();
