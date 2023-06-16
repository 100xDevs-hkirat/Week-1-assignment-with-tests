/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Print out the time it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
 */

function waitOneSecond() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Resolved After 1 Second')
        }, 1000);
    });
}

function waitTwoSecond() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Resolved After 2 Second')
        }, 2 * 1000);
    });
}

function waitThreeSecond() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Resolved After 3 Second')
        }, 3 * 1000);
    });
}

function calculateTime() {
    const start = new Date();
    waitOneSecond()
        .then((result) => {
        console.log(result);
        return waitTwoSecond();
        })
        .then((result) => {
            console.log(result);
            return waitThreeSecond();
        })
        .then((result) => {
            console.log(result);
            const duration = new Date() - start;
            console.log("Time Taken: ", duration, "ms");
        })
        .catch((error) => {
            console.log('Error:', error);
        });
}

calculateTime();