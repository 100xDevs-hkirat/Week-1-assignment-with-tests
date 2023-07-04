/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Print out the time it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
 */

function waitOneSecond() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('One second');
      }, 1000);
    });
  }
  
  function waitTwoSeconds() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('Two seconds');
      }, 2000);
    });
  }
  
  function waitThreeSeconds() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('Three seconds');
      }, 3000);
    });
  }
  

  function calculateTime() {
    const start = Date.now();

    waitOneSecond().then(()=> waitTwoSeconds()).then(() => waitThreeSeconds()).then(() => {
        const end = Date.now();
        const duration = end - start;
        console.log(`All promises resolved in ${duration} milliseconds.`);
    })
  }

  calculateTime();