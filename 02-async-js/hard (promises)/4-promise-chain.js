/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Print out the time it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
 */

function waitOneSecond() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {resolve(waitTwoSecond)}, 1000);
    });
}

function waitTwoSecond() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {resolve(waitThreeSecond)}, 2000);
    });
}

function waitThreeSecond() {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, 3000);
    });
}

function calculateTime() {
    const startTime = new Date().getTime();
    waitOneSecond().then((result) => {
        console.log("First promise finished", new Date().getTime() - startTime);
        result().then((result2) =>{
            console.log("Second promise finished", new Date().getTime() - startTime);
            result2().then((result3)=> {
                console.log("Third promise finished", new Date().getTime() - startTime);
                const endTime = new Date().getTime();
                console.log((endTime - startTime) / 1000);
                console.log("ALL chained promises finish here")
            })
        })
        
    });
}

calculateTime();