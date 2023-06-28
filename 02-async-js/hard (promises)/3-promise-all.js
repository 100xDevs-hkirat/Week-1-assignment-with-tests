/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Print how long it took for all 3 promises to resolve.
 */


function waitOneSecond() {

      return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Wanna Bet?");
            resolve();
        }, 1000);
    });



}

function waitTwoSecond() {

     return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
            console.log("I am so cool!");
        }, 2000);
    });


}

function waitThreeSecond() {


    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("hi Me from 3");
            resolve();
        }, 3000);
    });



}

function calculateTime() {

   

    let startTime = new Date().getTime();

    let promiseOneSecond = waitOneSecond();
    let promiseTwoSecond = waitTwoSecond();
    let promiseThreeSecond = waitThreeSecond();


    // promiseTwoSecond;

    // let endTime = new Date().getTime();
    // console.log("Time Taken:", endTime-startTime, "Milliseconds");

    Promise.all([promiseOneSecond, promiseTwoSecond, promiseThreeSecond]).then(() => {
        let endTime = new Date().getTime();
        console.log("Time Taken:", endTime-startTime, "Milliseconds");
    });


}


calculateTime();