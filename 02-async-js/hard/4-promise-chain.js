/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Print out the time it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
 */

function waitOneSecond() {
    return new Promise((resolve) => {
        console.log("inside 1")
        setTimeout(resolve, 1 * 1000);
    })
}

function waitTwoSecond() {
    return new Promise((resolve) => {
        console.log("inside 2")
        setTimeout(resolve, 2 * 1000);
    })
}

function waitThreeSecond() {
    return new Promise((resolve) => {
        console.log("inside 3")
        setTimeout(resolve, 3 * 1000);
    })
}

function calculateTime() {
    let start = new Date();
    waitOneSecond().then(() => {
        console.log("1 completed")
        waitTwoSecond().then(()=>{
            console.log("2 completed")
            waitThreeSecond().then(()=>{
                console.log("3 completed")
                let end = new Date();
                let time = (end.getTime() - start.getTime()) / 1000;
                console.log("Time to resolve : " + time + " s");
            })
        })
    })
}

calculateTime();