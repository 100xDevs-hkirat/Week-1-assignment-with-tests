/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 */

function sleep (seconds) {
    console.log(`start waiting ${seconds}`);
    return new Promise((resolve)=>{
        setTimeout(resolve,seconds*1000);

    })
}
sleep(4).then(()=>{
    console.log("wait 4 seconds ends");
}).then(()=>{
    sleep(5).then(()=>{
        console.log("5 second wating end");
    })
});
