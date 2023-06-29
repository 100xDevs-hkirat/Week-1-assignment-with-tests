/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Print how long it took for all 3 promises to resolve.
 */


function waitOneSecond() {
    return new Promise((resolve) => {
        console.log("promise 1")
        setTimeout(resolve, 1000)
    })
}

function waitTwoSecond() {
    return new Promise((resolve) => {
        console.log("promise 2")
        setTimeout(resolve, 2000)
    })
}

function waitThreeSecond() {
    return new Promise((resolve) => {
        console.log("promise 3")
        setTimeout(resolve, 3000)
    })
}


function calculateTime() {
    let start = new Date();
    let promises = [waitOneSecond(), waitTwoSecond(), waitThreeSecond()]
    Promise.all(promises).then(() => {
        console.log("promise resolved");
        console.log((new Date() - start))
    }).catch(() => {
        console.log("promise not resolved");
    }) 
}

calculateTime()