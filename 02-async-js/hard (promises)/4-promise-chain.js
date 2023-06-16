/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Print out the time it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
 */

function waitOneSecond() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve('One second has passed');
      }, 1000);
    });
  }
  
  function waitTwoSeconds() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve('Two seconds have passed');
      }, 2000);
    });
  }
  
  function waitThreeSeconds() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve('Three seconds have passed');
      }, 3000);
    });
  }
  
  function calculateTime() {
    const startTime = Date.now();
  
    waitOneSecond()
      .then((result) => {
        console.log(result);
        return waitTwoSeconds();
      })
      .then((result) => {
        console.log(result);
        return waitThreeSeconds();
      })
      .then((result) => {
        console.log(result);
        const endTime = Date.now();
        const elapsedTime = endTime - startTime;
        console.log('Sequential operation completed!');
        console.log('Elapsed time:', elapsedTime, 'ms');
      })
      .catch((error) => {
        console.log('Error:', error);
      });
  }
