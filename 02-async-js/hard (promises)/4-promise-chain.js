/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Print out the time it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
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
  waitOneSecond()
    .then((data) => {
      console.log(data);
      return waitTwoSecond();
    })
    .then((data) => {
      console.log(data);
      return waitThreeSecond();
    })
    .then((data) => {
      console.log(data);
      const endTime = Date.now();
      console.log(`all resolved in ${(endTime - startTime) / 1000}`);
    })
    .catch((err) => console.error(err));
}
calculateTime();
