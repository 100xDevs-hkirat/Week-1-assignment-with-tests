/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 */

function sleep (milliSeconds) {
    const now = Date.now()
    while (Date.now() <= (now + milliSeconds)) {}
}

let a = new Date()
sleep(10000)
console.log((new Date() - a) / 1000);

console.log("Hey there!");
