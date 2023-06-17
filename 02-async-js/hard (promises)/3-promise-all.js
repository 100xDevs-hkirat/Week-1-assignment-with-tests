/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Print how long it took for all 3 promises to resolve.
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
    Promise.all([waitOneSecond(), waitTwoSeconds(), waitThreeSeconds()]).then(function () {
        const endTime = new Date();
        const timeElapsed = (endTime - startTime) / 1000;
        console.log("Time taken:", timeElapsed, "seconds");
    });
}

calculateTime();