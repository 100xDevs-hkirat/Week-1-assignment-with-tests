/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 */

function sleep (seconds) {
    return new Promise((res, rej) => {
        setTimeout(res, seconds * 1000);
    })
}

const testFunction = () => {
    let promiseChain = Promise.resolve();

    promiseChain.then(() => {
        console.log(new Date().getSeconds());
        return sleep(5);
    }).then(() => {
        console.log(new Date().getSeconds());
    })
}

testFunction();