/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 */

function sleep (seconds) {
    return new Promise(resolve => setTimeout(resolve, seconds * 1000));
}

// using promise .then()
sleep(5)
    .then(() => console.log('After 5 seconds'))
    .then(() => sleep(2)) // again going for 2 second sleep
    .then(() => console.log('Back again after 2 seconds'))

// using async await
// async function callingSleep() {
//     console.log('operation before sleep');
//     await sleep(2);
//     console.log('operation to execute after halt');
// }

// callingSleep();