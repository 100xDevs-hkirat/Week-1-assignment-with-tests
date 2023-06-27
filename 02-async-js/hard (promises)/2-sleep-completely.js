/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 */

function sleep (seconds) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, seconds * 1000);
    });
}

async function totalSleep(seconds) {
    await sleep(seconds).then(() => {
        console.log("Resolved after complete sleep");
    });
    console.log("Printing after complete sleep wake-up");
}

totalSleep(5);