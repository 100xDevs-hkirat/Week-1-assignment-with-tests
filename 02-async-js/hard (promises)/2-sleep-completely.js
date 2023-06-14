/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 */

function sleep (seconds) {
    let end_ms = Date.now() + seconds * 1000;

    while(Date.now() < end_ms) {
        console.log("Waiting..");
    }

    console.log("Wait Done !!");
}

sleep(1);


// MAYBE IF YOU TRIED LIKE THIS, BUT NO IT WON'T WORK THIS WAY
// THE REASON IS AS WE KNOW THAT THE SETTIMEOUT IS BASICALLY AN 
// API PROVIDED BY (JS RUNTIME ENV) AND AFTER THE TIME IS PASSED 
// THE CALLBACK IS PUSHED INTO EVENT QUEUE, BUT IT WILL ONLY BE 
// EXECUTED WHEN OUR CALL STACK IS EMPTY AGAIN, AND THAT ISN'T 
// GONNA HAPPEN HERE, BECAUSE WE ARE RUNNING A INFINITE LOOP

// function sleep (seconds) {
    
//     let condition = true;

//     let promise = new Promise((resolve,reject) => {
//         setTimeout(resolve,seconds*1000);
//     });

//     promise.then(()=>{
//         condition = false
//     });

//     while(condition) {
//         console.log("Waiting !!"+condition)
//     }

//     console.log("Wait finished");
// }
