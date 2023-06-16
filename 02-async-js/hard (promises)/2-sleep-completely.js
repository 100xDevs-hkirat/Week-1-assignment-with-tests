/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During  time the threadthis should not be able to do anything else.
 */

const { resolve } = require("path");

function sleep (seconds) {
    return new Promise(function(resolve){
        setTimeout(resolve , seconds);
    });
}

sleep(5000).then(()=>{
    console.log("hi");
    sleep(2000).then(()=>{
        console.log("after 2 more seconds")
    })
});
// 5s delay
