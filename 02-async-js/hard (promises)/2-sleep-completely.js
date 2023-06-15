/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 */

function sleep(seconds) {
    return new Promise((resolve) => {
        setTimeout(resolve, seconds);
    });
}

async function main(){
    console.log("Hi")
    await sleep(3000)
    console.log("Hi again after 3 seconds")
}

main()