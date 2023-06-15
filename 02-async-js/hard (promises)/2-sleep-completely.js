/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 */

function sleep(seconds) {

    return new Promise((resolve, reject) => {
        setTimeout(resolve, seconds)
    })

}
let seconds = 1000;
sleep(seconds).then(() => {
    console.log("is CPU idle");
});

for (let i = 0; i < 5; i++) {
    console.log("understanding synchrnous nature of js");
}