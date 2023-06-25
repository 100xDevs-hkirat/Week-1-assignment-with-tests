/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 */

function sleep (seconds) {
    return new Promise(resolve => setTimeout(resolve, seconds));
}

async function Tutor() {
    console.log('Hello Toturix');
    for (let i = 1; i <20 ; i++) {        
       await sleep(3000);
       console.log( i +" "+"Welcome to tutorix ");
    }
 }

console.log(Tutor())