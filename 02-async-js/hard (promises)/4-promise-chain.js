/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Print out the time it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
 */

function waitOneSecond() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve('Resolved after 1 second');
      }, 1000);
    });
  }
  
  function waitTwoSeconds() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve('Resolved after 2 seconds');
      }, 1000);
    });
  }
  
  function waitThreeSeconds() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve('Resolved after 3 seconds');
      }, 1000);
    });
  }
  
  async function calculateTime() {
    const startTime = Date.now();
  
    const result1 = await waitOneSecond();
    console.log(result1);
  
    const result2 = await waitTwoSeconds();
    console.log(result2);
  
    const result3 = await waitThreeSeconds();
    console.log(result3);
  
    const endTime = Date.now();
    const duration = endTime - startTime;
    console.log(`Entire operation completed in ${duration} milliseconds.`);
  }
  
  calculateTime();
  