/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 */

function sleep (seconds) {
    delay(seconds);
}

function delay(duration) {
    const start = Date.now();
    while (Date.now() - start < duration) {
       
    }
}