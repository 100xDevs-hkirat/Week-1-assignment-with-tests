/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Print how long it took for all 3 promises to resolve.
 */


function waitOneSecond() {
    return new Promise((resolve,reject) => {
        setTimeout(()=>{
            resolve("Resolving after 1 second ")
        },1000)
    })
}

function waitTwoSecond() {
    return new Promise((resolve,reject) => {
        setTimeout(()=>{
            resolve("Resolving after 2 seconds ")
        },2000)
    })
}

function waitThreeSecond() {
    return new Promise((resolve,reject) => {
        setTimeout(()=>{
            resolve("Resolving after 3 seconds ")
        },3000)
    })
}

function calculateTime() {
    var start = new Date();
    Promise.all([waitOneSecond(), waitTwoSecond(), waitThreeSecond()]).then( () => {
        var end = new Date();
        var time = (end.getTime() - start.getTime())/1000;
        console.log("Total Time taken to resolve all the promises " + time)
    })
}

calculateTime();