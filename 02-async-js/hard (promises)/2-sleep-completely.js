/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 */

const { resolve } = require("path")

 function sleep (seconds) {
       return new Promise((resolve,reject)=>{
        setTimeout(()=>resolve("pause finished"),seconds*1000);
       })
}

 async function testSleep(seconds){
    console.log("Pausing the execution");
    await sleep(3).then((result)=>console.log(result));
    console.log("Execution ended");
 }


 testSleep(3);




