/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Print out the time it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
 */

function waitOneSecond() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("1s");
    }, 1000);
  });
}

function waitTwoSeconds() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("2s");
    }, 2000);
  });
}

function waitThreeSeconds() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("3s");
    }, 3000);
  });
}

async function sequentiallyCall() {
  const start = Date.now();

  await waitOneSecond();
  await waitTwoSeconds();
  await waitThreeSeconds();

  const end = Date.now();

  console.log(`Time taken: ${end - start} milliseconds`);
}

function calculateTime() {
    sequentiallyCall();
}

calculateTime();
