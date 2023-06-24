/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Print out the time it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
 */

function delay(seconds) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(seconds);
    }, seconds * 1000);
  });
}

const startTime = Date.now();

delay(1)
  .then((result1) => {
    console.log(result1);
    return delay(2);
  })
  .then((result2) => {
    console.log(result2);
    return delay(3);
  })
  .then((result3) => {
    const endTime = Date.now();
    const diff = endTime - startTime;
    console.log(result3);
    console.log(`Total time taken: ${diff} milliseconds`);
  })
  .catch((error) => {
    console.log(error);
  });

delay(1000);
