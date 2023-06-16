/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 */

function sleep (seconds) {
    const start = new Date().getTime();
    console.log(start);
    while(new Date().getTime()-start < seconds){

    }
}
console.log("Begin !!")
sleep(5000)
console.log("End!!!");
finish=new Date().getTime();
console.log(finish)