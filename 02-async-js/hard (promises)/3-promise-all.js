/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Print how long it took for all 3 promises to resolve.
 */


function waitOneSecond() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, 1000)
    })
}

function waitTwoSecond() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, 2000)
    })
}

function waitThreeSecond() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, 3000)
    })
}

function calculateTime() {
    let startTime = new Date().getTime();
    const promises = [waitOneSecond(), waitThreeSecond(), waitThreeSecond()];

   Promise.all(promises)
    .then(() => {
      const endTime = new Date();
      const durationInSeconds = (endTime - startTime) / 1000;
      console.log(`All promises resolved in ${durationInSeconds} seconds.`);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
}

calculateTime();