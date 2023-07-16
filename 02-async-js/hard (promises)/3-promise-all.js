/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Print how long it took for all 3 promises to resolve.
 */

function waitOneSecond() {
    function promiseBody(resolve){
        setTimeout(function(){resolve("Promise 1 resolved")},1000);
    }
    return new Promise(promiseBody);}

function waitTwoSecond() {
    function promiseBody(resolve){
        setTimeout(function (){resolve("Promise 2 resolved")},2000);
    }
    return new Promise(promiseBody);
}

function waitThreeSecond() {
    function promiseBody(resolve){
        setTimeout(function(){resolve("Promise 3 resolved")},3000);
    }
    return  new Promise(promiseBody);
}

function calculateTime() {
var startTime = Date.now();
Promise.all([waitOneSecond(), waitTwoSecond(), waitThreeSecond()]).then(function(values) {
    console.log(values);
var endTime = Date.now();
var timeElapsed = endTime-startTime;
console.log(timeElapsed+" milliseconds");
});
}

calculateTime();