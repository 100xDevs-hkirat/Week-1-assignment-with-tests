/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Print out the time it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
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
    p1.then(() => {
        p2.then(() => {
            p3.then(() => {
                const dt2 = new Date();
                const timeTaken = (dt2.getTime() - dt.getTime()) / 1000;
                console.log(`it took ${timeTaken}seconds`)
            })
        })
    })
}

calculateTime();

//it took same time as before. So this is just like callback hell. Better not use this
