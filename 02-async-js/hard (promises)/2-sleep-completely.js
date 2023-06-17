/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 */

function sleep (seconds) {
    const date = new Date();
    while(Date.now() - date < seconds) {}
}

console.log("Waiting for timer...");
sleep(2000);
console.log("Timer complete!");