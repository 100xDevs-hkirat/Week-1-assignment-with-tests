/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Print out the time it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
 */

function waitOneSecond() {
    return new Promise(resolve => {
        setTimeout(() => {
          resolve('Promise resolved after 1 second');
        }, 1000);
      });

}

function waitTwoSecond() {
    return new Promise(resolve => {
        setTimeout(() => {
          resolve('Promise resolved after 2 seconds');
        }, 2000);
      });

}

function waitThreeSecond() {
    return new Promise(resolve => {
        setTimeout(() => {
          resolve('Promise resolved after 3 seconds');
        }, 3000);
      });

}

function calculateTime() {
    const startTime = performance.now();

  waitOneSecond()
    .then(result => {
      console.log(result);
      return waitOneSecond();
    })
    .then(result => {
      console.log(result);
      return waitThreeSecond();
    })
    .then(result => {
      console.log(result);
      const endTime = performance.now();
      const duration = endTime - startTime;
      console.log('Duration:', duration.toFixed(2), 'ms');
    })
    .catch(error => {
      console.error('An error occurred:', error);
    });

}


/*
OBSERVATION :
since in this (Promise-chain), the promises are resloved sequentially ,there is a delay 
which is significant in comparison with Promise-all .In promise all it only executes when all the
three or givn prmosies are resolved hence it works kinda parallely while the promise chain works
sequentially.*/
