/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 */

function sleep (milliseconds) {
    const start = Date.now();
    var time = 1;
    while (Date.now() - start < milliseconds) {
      // Wating for the thread to be released
    }
}

const start = Date.now();
sleep(10000);
const end = Date.now();
console.log(end-start);
for (let index = 0; index <10; index++) {
    console.log(index);
}
