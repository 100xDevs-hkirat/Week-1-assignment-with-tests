/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Print out the time it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
 */

function waitOneSecond() {
    let promise = new Promise(function (resolve) {
        setTimeout(resolve, 1000);
    })
    return promise;
}

function waitTwoSecond() {
    let promise = new Promise(function (resolve) {
        setTimeout(resolve, 2000);
    })
    return promise;
}

function waitThreeSecond() {
    let promise = new Promise(function (resolve) {
        setTimeout(resolve, 3000);
    })
    return promise;
}

function calculateTime() {
    waitOneSecond()
        .then(waitTwoSecond())
        .then(waitThreeSecond()).then(() => {
            console.log("hello all");
        });
}