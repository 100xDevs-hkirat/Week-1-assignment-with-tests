/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 */

function sleep (milliseconds) {
    const time = new Date();
    while(Date.now()-time<milliseconds){
        //Busy wait
    }
}
sleep(10000);
console.log("Hoo")