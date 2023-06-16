/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 */

function sleep (seconds) {
    return new Promise((resolve) => {
        setTimeout(resolve, seconds*1000);
    })
}
async function haltJs(){
    console.log("start");
    await sleep(2)
    console.log("end")
}
haltJs();
console.log("check execution")
for(let i=0; i<10; i++){
    i=i+1;
    console.log(i)
}