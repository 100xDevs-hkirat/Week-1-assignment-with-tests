/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 */


const getCurrentTime = () => {
    const timestamp = Date.now() 
    const date = new Date(timestamp)
    return `${date.getHours()}h:${date.getMinutes()}m:${date.getSeconds()}s`
}

const sleep = (seconds) => {
    const startTimeInMilliSecond = Date.now() ;
    while (Date.now() - startTimeInMilliSecond < seconds*1000) { 
        // Do nothing, busy waiting , JS thread busy during the delay
    }
}

console.log(`Execution Started : ${getCurrentTime()}`)
sleep(2) ;
console.log(`Delayed, Got Thread back at : ${getCurrentTime()}`)