/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Print out the time it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
 */

function waitOneSecond() {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>resolve("Resolved after 1 second"),1000);
    });

}

function waitTwoSecond() {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>resolve("Resolved after 2 seconds"),2000);
    });

}

function waitThreeSecond() {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>resolve("Resolved after 3 seconds"),3000);
    });

}

function calculateTime() {
let start= Date.now();

 waitOneSecond()
 .then((result)=>{
    console.log(result);
    return waitTwoSecond();
})
 .then((result)=>{
    console.log(result);
    return waitThreeSecond();
 })
 .then((result)=>{
    console.log(result);
    console.log("Total time for execution is "+(Date.now()-start)/1000)
});

}

calculateTime();