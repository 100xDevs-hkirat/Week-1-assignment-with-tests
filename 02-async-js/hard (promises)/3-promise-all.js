/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Print how long it took for all 3 promises to resolve.
 */

function waitOneSecond() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("waitOneSecond resolved");
      resolve();
    }, 1000);
  });
}

function waitTwoSeconds() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("waitTwoSeconds resolved");
      resolve();
    }, 2000);
  });
}

function waitThreeSeconds() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("waitThreeSeconds resolved");
      resolve();
    }, 3000);
  });
}

async function calculateTime() {
  const startTime = new Date();
  await Promise.all([waitOneSecond(), waitTwoSeconds(), waitThreeSeconds()]);
  const endTime = new Date();
  const duration = endTime - startTime;
  console.log(`All promises resolved in ${duration} milliseconds.`);
}

calculateTime();
