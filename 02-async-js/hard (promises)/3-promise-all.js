/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Print how long it took for all 3 promises to resolve.
 */
import wait from './1-promisify-setTimeout'; 

function waitOneSecond() {
 return wait(1)
}

function waitTwoSecond() {
    return wait(2)
}

function waitThreeSecond() {
    return wait(3)
}

function calculateTime() {
    let time = Date.now();
    Promise.all(waitOneSecond, waitTwoSecond, waitThreeSecond),then(() => {
        console.log(`time take:${(time - Date.now)/1000}`);
    });

}