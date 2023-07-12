/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 */

function sleep (seconds) {
    var counter=0
    for(var i=0;i<seconds;i++){
        counter+=1
    }
}

sleep(1000000000000)