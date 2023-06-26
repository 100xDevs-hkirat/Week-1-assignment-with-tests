/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 */

function sleep(seconds) {
    const date = new Date();
    let time = date.getTime();
    let time2 = time;
    do {
        const date2 = new Date();
        time2 = date2.getTime();

    } while ((time2 - time) <= seconds * 1000);
}

