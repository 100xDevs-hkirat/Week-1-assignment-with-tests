/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 */

function sleep(seconds) {
    const startTime = new Date();
    while (true) {
        var currentTime = new Date();
        var difference = (currentTime - startTime) / 1000;
        if (difference >= seconds) return;
    }
}
const startTime = new Date()
sleep(10)
const endTime = new Date()
console.log(`Hello after ${(endTime - startTime) / 1000} seconds`)