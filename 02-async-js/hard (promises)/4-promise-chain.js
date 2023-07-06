/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Print out the time it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
 */

function waitOneSecond() {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, 1000, "Data after 1 second.")
    })
}

function waitTwoSecond() {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, 2000, "Data after 2 second.")
    })
}

function waitThreeSecond() {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, 3000, "Data after 3 second.")
    })
}

function calculateTime() {
    const now = Date.now()
    waitOneSecond().then(v => {
        console.log(v);
        waitTwoSecond().then(v => {
            console.log(v);
            waitThreeSecond().then(v => {
                console.log(v);
                console.log(`Time elapsed: ${(Date.now() - now) / 1000} seconds`);
            })
        })
    })
    // how to return values?
}

calculateTime()
