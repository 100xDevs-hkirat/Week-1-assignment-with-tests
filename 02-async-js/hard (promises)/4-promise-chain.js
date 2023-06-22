/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Print out the time it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
 */

function waitOneSecond() {
    return new Promise(resolve => {
        setTimeout(() => {
          resolve('Promise 1 resolved');
        },1000);
    });
}

function waitTwoSecond() {
    return new Promise(resolve => {
        setTimeout(() => {
          resolve('Promise 2 resolved');
        },2000);
    });
}

function waitThreeSecond() {
    return new Promise(resolve => {
        setTimeout(() => {
          resolve('Promise 3 resolved');
        },3000);
    });
}

function calculateTime() {
    const start = new Date();

  waitOneSecond()
    .then(result1 => {
      console.log(result1);
      return waitTwoSecond();
    })
    .then(result2 => {
      console.log(result2);
      return waitThreeSecond();
    })
    .then(result3 => {
      console.log(result3);
      const end = new Date();
      const duration = end - start;
      console.log('Sequential execution completed in', duration, 'milliseconds');
    })
    .catch(error => {
      console.error('An error occurred:', error);
    });
}

calculateTime();