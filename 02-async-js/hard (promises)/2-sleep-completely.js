/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 */

function sleep (seconds) {
    var start = new Date();
    var cur = new Date();
    while(cur - start != seconds*1000)
    {
        cur=new Date();
    }
}

console.log("start");
sleep(3);
console.log("end");
