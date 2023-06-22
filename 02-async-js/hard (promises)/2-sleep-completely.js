/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 */

function sleep(seconds) {
    const start = Date.now();
    let delay=0;
    while(delay<=(seconds*1000)){
        delay = Date.now() - start;
    }
    return delay
}
const delay = sleep(4) //halting the execution thread for 4 seconds
console.log(`Execution of this was halted for ${delay} milliseconds(approximately the given number of seconds).`)
