/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Print how long it took for all 3 promises to resolve.
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
    const prm1 = waitOneSecond();
    const prm2 = waitTwoSecond();
    const prm3 = waitThreeSecond();
    Promise.all([prm1,prm2,prm3])
    .then(data=>{
        const end = new Date();
        const duration = end-start;
        console.log('All promises resolved in', duration, 'milliseconds');
        console.log('Results:', data);
    });
}

calculateTime();