/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Print how long it took for all 3 promises to resolve.
 */


const startTime = Date.now() 
function waitOneSecond() {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log(`Promise 1 Resolved in: ${(Date.now()-startTime)/1000}s`)
            resolve()
        }, 1000) 
    })
}

function waitTwoSecond() {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log(`Promise 2 Resolved in: ${(Date.now()-startTime)/1000}s`)
            resolve()
        }, 2000) 
    })
}

function waitThreeSecond() {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log(`Promise 3 Resolved in: ${(Date.now()-startTime)/1000}s`)
            resolve()
        }, 3000) 
    })
}

function calculateTime() {
    const allPromises = [waitOneSecond(), waitTwoSecond(), waitThreeSecond()] 
    Promise.all(allPromises).then(() => {
        console.log(`Time Elapsed: ${(Date.now() - startTime) / 1000}s`);
      });
}
calculateTime()
