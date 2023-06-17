/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 */

function sleep(seconds) {
    var startTime = new Date();
    while (true) {
        var curTime = new Date();
        var diff = (curTime - startTime) / 1000;
        if (diff >= seconds) return;
    }
}

sleep(5);