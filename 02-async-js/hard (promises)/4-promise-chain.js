/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Print out the time it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
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
  waitOneSecond()
    .then(waitTwoSecond)
    .then(waitThreeSecond)
    .then(() => {
      const end = new Date();
      console.log(`time taken : ${(end - start) / 1000} seconds`);
    })
    .catch((err) => {
      console.log(err);
    });
}
calculateTime();

//Promise.all took lesser time as compared to chained promises
//Promise.all execution time equals the most delayed or time consuming promise whereas
//chained promise execution time equals the sum of all promises time
