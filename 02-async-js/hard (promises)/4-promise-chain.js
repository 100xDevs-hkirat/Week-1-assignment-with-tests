/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Print out the time it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
 */

function waitOneSecond() {
    var promise = new Promise(function promiseBody(resolve){
        setTimeout(resolve, 1000);
    })
    return promise;
}

function waitTwoSeconds() {
    var promise = new Promise(function promiseBody(resolve){
        setTimeout(resolve, 2000);
    })
    return promise;
}

function waitThreeSeconds() {
    var promise = new Promise(function promiseBody(resolve){
        setTimeout(resolve, 3000);
    })
    return promise;
}

function calculateTime() {
    const startTime = new Date();
    waitOneSecond()
        .then(() => {
            return waitTwoSeconds();
        })
        .then(() => {
            return waitThreeSeconds();
        })
        .then(() => {
            const endTime = new Date();
            const timeElapsed = (endTime - startTime) / 1000;
            console.log("Time taken:", timeElapsed, "seconds");
        });
}

calculateTime();