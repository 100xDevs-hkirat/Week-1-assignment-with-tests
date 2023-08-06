/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Print out the time it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
 */

function waitOneSecond() {
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve('1 sec wait complete')
        }, 1000);
    })
}

function waitTwoSecond() {
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve('2 sec wait complete')
        }, 2000);
    })
}

function waitThreeSecond() {
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve('3 sec wait complete');
        }, 3000);
    })
}


function calculateTime() {
    const start = Date.now();
    waitOneSecond().then((value)=>{
        console.log(value);
        return waitTwoSecond();
    }).then((value)=>{
        console.log(value);
        return waitThreeSecond();
    }).then((value)=>{
        console.log(value);
        console.log("Sequencially Total Time:",Date.now()-start);
    });
    
}
calculateTime();
