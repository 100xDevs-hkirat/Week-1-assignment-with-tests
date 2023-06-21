/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 */
function sleep (seconds) {
    return new Promise(resolve => setTimeout(resolve, seconds * 1000))
}

console.log("This will execute");
async function haltJS(){
    await sleep(3);
    console.log('This will execute after 3 seconds because Javascript is waiting for the above to finish (await keyword)');
}
haltJS();
console.log("This will also execute");