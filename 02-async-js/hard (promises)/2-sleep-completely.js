/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 */

function sleep (seconds) {
    let start = Date.now()
    while (Date.now() - start < seconds) {
    }
}

console.log('Before busy wait');
sleep(5000); // Wait for 3 seconds
console.log('After busy wait');

