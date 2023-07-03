/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Print how long it took for all 3 promises to resolve.
 */


function waitOneSecond() {
    return new Promise((resolve,reject) => {
        setTimeout(() => resolve("Promise 1"), 1000);
    });  
}

function waitTwoSecond() {
    return new Promise((resolve,reject) => {
        setTimeout(() => resolve("Promise 2"), 2000);
    });
}

function waitThreeSecond() {
    return new Promise((resolve,reject) => {
        setTimeout(() => resolve("Promise 3"), 3000);
    });
}
function promiseAllFun(){
    return Promise.all([waitOneSecond(), waitTwoSecond(), waitThreeSecond()]);
}
function calculateTime() {
const start = new Date();
promiseAllFun()
    .then(() => {
      const end = new Date();
      console.log(
        `Time taken: ${(end - start) / 1000}`
      );
    })
    .catch(() => {
     const end = new Date(); 
      console.log(`One of the three promises got rejected and time taken: ${(end - start) / 1000} `);
    });
}
calculateTime() 