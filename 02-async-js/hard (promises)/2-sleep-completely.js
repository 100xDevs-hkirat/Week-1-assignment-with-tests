/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 */

function sleep (seconds) {
    return new Promise((resolve) => {
        console.log(`Thread is blocked for next ${seconds} seconds`);
        setTimeout(() => {
            resolve();
        }, seconds * 1000);
    });
}

async function runSleep(){
    await sleep(5);
    console.log("Contnuing execution after sleep");
}

runSleep();
