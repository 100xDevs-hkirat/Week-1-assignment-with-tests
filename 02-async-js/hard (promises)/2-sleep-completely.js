/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 */

function sleep (seconds) {
    return new Promise((resolve) => {
        setTimeout(resolve, seconds * 1000);
    })
}

function tempFunction() {
    
    sleep(2).then(() => {
        console.log('Print line A after 2 seconds sleep');
    });
    sleep(5).then(() => {
        console.log('Print line B after 5 seconds sleep');
    });
    sleep(10).then(() => {
        console.log('Print line C after 10 seconds sleep');
    });
    sleep(20).then(() => {
        console.log('Print line D after 20 seconds sleep');
    });
}

tempFunction();