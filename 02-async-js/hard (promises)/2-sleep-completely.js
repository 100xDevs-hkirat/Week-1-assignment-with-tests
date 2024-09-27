/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 */

// function sleep (seconds) {
//     let start = Date.now();

//     while(Date.now() - start < seconds*1000){}
// }
let cnt = 0;
async function delay(seconds){
    return new Promise( (resolve ) => setTimeout(resolve, seconds*1000))
}
async function sleep(seconds){
    let res = await delay(seconds);
    console.log(`after ${seconds} seconds`);
    return res;
}

sleep(3);

for(let i=0;i<10;i++){
    console.log(i);
}
