/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Print out the time it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
 */

function waitOneSecond() {
    return new Promise(resolve => {
        setTimeout(() => resolve(), 1000);
    })
}

function waitTwoSecond() {
    return new Promise(resolve => {
        setTimeout(() => resolve(), 2000);
    })
}

function waitThreeSecond() {
    return new Promise(resolve => {
        setTimeout(() => resolve(), 3000);
    })
}

function calculateTime() {
    let startTime = new Date().getTime();
    waitOneSecond().then(() =>{
        console.log("First Completed");
        waitTwoSecond().then(() =>{
            console.log("Second Completed");
            waitThreeSecond().then(() =>{
                console.log("Third Completed");
                let endTime = new Date().getTime();
                let timeTaken = (endTime - startTime) / 1000;
                console.log("Time for all promises to finish");
                console.log(timeTaken);
            })
        })
    })
}

// The total time is around 6 seconds as it adds up each promise one after another (1+2+3)
calculateTime();