/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 */

async function sleep (seconds) {
    return new Promise((resolve, reject) => {
        console.log("sleeping now")
        setTimeout(() => {
            resolve();
        }, seconds * 1000);
    });
}

async function totalSleep(seconds) {
    
    await sleep(seconds).then(() => console.log("waking up"));

    console.log(`resolved after completing sleep after ${seconds * 1000}`);
}


totalSleep(5);