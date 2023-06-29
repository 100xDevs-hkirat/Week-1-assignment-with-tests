/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 */

function sleep (seconds) {
    let start = new Date();
    for(let i=0; i>=0; i++){
        if((new Date() - start) > seconds){
            break;
        }
    }
}

sleep(5000)
console.log("Hi Hello!!");
