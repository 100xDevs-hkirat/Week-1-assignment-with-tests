/*
    * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
    * Write a function that sequentially calls all 3 of these functions in order.
    * Print out the time it takes to complete the entire operation.
    * Compare it with the results from 3-promise-all.js
*/


/*
    Promise.all : This allows multiple asynchronous (Promises) operations to run in parallel. 
                  Suitable when you have multiple independent asynchronous operations that can run in parallel
                  Overall Time => max( P1,P2,P3....) 
                  
    Nesting Promises: chaining.then(), execute asynchronous operations sequentially.
                  Each .then() block waits for the previous promise to resolve before executing it.
                  Suitable when a chain of dependent asynchronous operations need to be executed sequentially.
                  Overall Time => ( P1+P2+P3+....)
*/
function waitOneSecond() {
    return new Promise(resolve => {
      setTimeout(() => {
        console.log("Promise 1 Resolved");
        resolve();
      }, 1000);
    });
  }
  
  function waitTwoSecond() {
    return new Promise(resolve => {
      setTimeout(() => {
        console.log("Promise 2 Resolved");
        resolve();
      }, 2000);
    });
  }
  
  function waitThreeSecond() {
    return new Promise(resolve => {
      setTimeout(() => {
        console.log("Promise 3 Resolved");
        resolve();
      }, 3000);
    });
  }
  
  function calculateTime() {
    const startTime = Date.now();
  
    return waitOneSecond()
      .then(() => waitTwoSecond())
      .then(() => waitThreeSecond())
      .then(() => {
        const endTime = Date.now();
        const elapsedTime = (endTime - startTime) / 1000; // Convert to seconds
        console.log(`Time taken: ${elapsedTime} seconds`);
      });
  }
  
  calculateTime();
  