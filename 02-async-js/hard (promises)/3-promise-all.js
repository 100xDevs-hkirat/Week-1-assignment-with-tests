/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Print how long it took for all 3 promises to resolve.
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
    Promise.all([
        waitOneSecond(),
        waitTwoSecond(),
        waitThreeSecond()
    ]).then(values => {
        console.log(`Time elapsed: ${(Date.now() - now) / 1000} seconds`);
        console.log(values)
    })
    // how to return values?
}

calculateTime()
