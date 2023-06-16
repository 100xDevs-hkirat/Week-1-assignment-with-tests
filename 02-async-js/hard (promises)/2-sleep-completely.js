/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 */

function sleep (seconds) {
    return new Promise((res)=>{
        setTimeout(res,seconds)
    })
}

async function temp(){
    console.log("I got the thread first")
    await sleep(2000)
    console.log("why i got thread after two seconds :(")
}
temp()