/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Print out the time it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
 */

function waitOneSecond() {
    function promiseBody(resolve){
        setTimeout(function(){resolve("Promise 1 resolved")},1000);
    }
    return new Promise(promiseBody);
}

function waitTwoSecond() {
    function promiseBody(resolve){
        setTimeout(function(){resolve("Promise 2 resolved");},2000);
    }
    return new Promise(promiseBody);
}

function waitThreeSecond() {
    function promiseBody(resolve){
        setTimeout(function(){resolve("Promise 3 resolved");},3000);
    }
    return new Promise(promiseBody);
}

function calculateTime() {
    let startTime = Date.now();
    waitOneSecond().then(function(value){
        console.log(value);
        return waitTwoSecond().then(function (value){
            console.log(value);
            return waitThreeSecond().then(function(value){
                console.log(value);
                let endTime = Date.now();
                let timeElapsed = endTime - startTime;
                console.log(timeElapsed+" milliseconds");
            });
        });
    });
}

calculateTime();