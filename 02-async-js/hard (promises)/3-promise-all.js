/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Print how long it took for all 3 promises to resolve.
 */


function waitOneSecond() {
    return new Promise(function(resolve){
        setTimeout(resolve,1000);
    })
}

function waitTwoSecond() {
    return new Promise(function(resolve){
        setTimeout(resolve,2000);
    })
}

function waitThreeSecond() {
    return new Promise(function(resolve){
        setTimeout(resolve,3000);
    })
}

function calculateTime() {
    const start = Date.now();
    const promise_1 = waitOneSecond();
    const promise_2 = waitTwoSecond();
    const promise_3 = waitThreeSecond();

    Promise.all([promise_1, promise_2, promise_3]).then(time =>{
        const end = Date.now();
        var time = (end - start)/1000;
        console.log(`Time Spent on all three Promises : ${time} seconds`);
    })
}

calculateTime();