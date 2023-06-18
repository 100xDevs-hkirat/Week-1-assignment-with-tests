/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Print how long it took for all 3 promises to resolve.
 */

const { rejects } = require("assert");
const { resolve } = require("path");


function waitOneSecond() {
    return new Promise((resolve,rejects)=>{
        const start=Date.now();
        setTimeout(()=>resolve(start),1000)
    })
}

function waitTwoSecond() {
    return new Promise((resolve,rejects)=>{
        setTimeout(resolve,2000)
    })
}

function waitThreeSecond() {
    return new Promise((resolve,rejects)=>{
        setTimeout(resolve,3000)
    })
}

function calculateTime() {
    Promise.all([waitOneSecond(),waitTwoSecond(),waitThreeSecond()]).then((result)=>{
        const current= Date.now();
        console.log((current-result[0])/1000);
    })
}

calculateTime();