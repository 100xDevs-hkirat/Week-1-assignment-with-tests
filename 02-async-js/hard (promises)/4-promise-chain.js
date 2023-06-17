/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Print out the time it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
 */

function createPromiseResolver(time) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, time);
    });
}

function waitOneSecond() {
    return createPromiseResolver(1000);
}

function waitTwoSecond() {
    return createPromiseResolver(2000);
}

function waitThreeSecond() {
    return createPromiseResolver(3000);
}

function calculateTime() {
    var startTime = Date.now();
    waitOneSecond().then(() => {
        return waitTwoSecond();
    }).then(() => { return waitThreeSecond() }).then(() => {
        var currTime = Date.now();
        console.log(`Time elapsed - ${(currTime - startTime) / 1000}`);
    }).catch((error) => { console.log(error) });
}

calculateTime();