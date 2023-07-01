/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 */

function sleep(seconds) {
    let startTime = new Date();
    while (new Date() - startTime < seconds) {
        lastTime = new Date();
    }
}
function printHello() {
    console.log("hello");
}
setInterval(printHello, 1000);
console.log("Before sleep")
sleep(5000);
console.log("After sleep")
//Added comment
