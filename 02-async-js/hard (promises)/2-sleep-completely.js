/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 */

function sleep(seconds) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, seconds * 1000);
    });
}


async function main() {
    await sleep(10).then(() => {
        console.log("yaa now you can run")
    });


    console.log("start")
    console.log("stop")
    console.log("do something")
}

main();

