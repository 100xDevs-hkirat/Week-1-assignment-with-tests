/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Print how long it took for all 3 promises to resolve.
 */
// taken from 1-promisify-setTimeout.js
function wait(n) {
    const pr = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("resolved");
        }, n * 1000);

    })
    return pr;
}

function waitOneSecond() {
    return wait(1);
}

function waitTwoSecond() {
    return wait(2);
}

function waitThreeSecond() {
    return wait(3);
}

function calculateTime() {
    const p1 = waitOneSecond(), p2 = waitTwoSecond(), p3 = waitThreeSecond();
    const dt = new Date();
    Promise.all([p1, p2, p3]).then(() => {
        const dt2 = new Date();
        const timeTaken = (dt2.getTime() - dt.getTime()) / 1000;
        console.log(`it took ${timeTaken}seconds`)
    })
}
calculateTime();