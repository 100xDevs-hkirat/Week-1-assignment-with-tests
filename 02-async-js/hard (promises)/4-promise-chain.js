/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Print out the time it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
 */

function waitOneSecond() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve(1);
        }, 1000);
    });
}

function waitTwoSecond() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve(1);
        }, 2000);
    });
}

function waitThreeSecond() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve(1);
        }, 3000);
    });
}


function calculateTime() {
    const startTime = new Date();
    waitOneSecond()
        .then(function (){
            waitTwoSecond();
        })
        .then(function (){
            waitThreeSecond()
        })
        .then(function(){
            const endTime = new Date();
            const duration = Math.floor((endTime - startTime)/1000);
            console.log(`Total time = ${duration} seconds`);
        });
}

calculateTime();