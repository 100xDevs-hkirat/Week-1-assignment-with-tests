/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Print out the time it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
 */

function waitOneSecond() {
    const promise = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('waiting 1 sec');
        },1000);
    });
    return promise;
}

function waitTwoSecond() {
    const promise = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('waiting 2 sec');
        },2000);
    });
    return promise;
}

function waitThreeSecond() {
    const promise = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('waiting 3 sec');
        },3000);
    });
    return promise;
}

function calculateTime() {
    waitOneSecond().then(()=>{
        console.log('waited 1 sec');
        return waitTwoSecond();
    }).then(()=>{
        console.log('waited 2 sec');
        return waitThreeSecond();
    }).then(()=>{
        console.log('waited 3 sec');
    });
    console.log('end');
}
calculateTime();