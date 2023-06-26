/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Print out the time it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
 */

function waitOneSecond() {
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            resolve();
        },1000);
    });
}

function waitTwoSecond() {
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            resolve();
        },2000);
    });
}

function waitThreeSecond() {
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            resolve();
        },3000);
    });
}

function calculateTime() {
    
        let start = new Date();
    
        waitOneSecond().then(function(){
            return waitTwoSecond();
        }).then(function(){
            return waitThreeSecond();
        }).then(function(){
            let end = new Date();
            console.log("Time taken: " + (end-start) + " milliseconds");
        });
    
}

calculateTime();