/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Print out the time it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
 */
function wait(n) {
    return new Promise((res) => {
        setTimeout(res, n * 1000)
    })
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
    const ts = Date.now();
    waitOneSecond()
        .then(() => waitTwoSecond())
        .then(() => waitThreeSecond())
        .then(() => {
            const tsElapsed = Date.now() - ts;
            console.log(`Sequential time elapsed ${tsElapsed / 1000}s`)
        })
        .catch((err) => {
            console.log(err)
        })
}
calculateTime();

