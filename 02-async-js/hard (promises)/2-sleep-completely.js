/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 */

function sleep (seconds) {

}

function sleep (milliseconds) {
    const start = Date.now();
    while(Date.now()-start<milliseconds){
        //we are doing nothing
    }
}


console.log("Before Sleep");
sleep(2000);
console.log("after sleep");