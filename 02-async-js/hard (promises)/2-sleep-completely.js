/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 */

function sleep (seconds) {
    let start = new Date();
    while (new Date() - start < seconds*1000){
        
    }
}

let a = 2, b = 5
console.log("Waiting for the answer:")
sleep(1);
console.log(a+b)