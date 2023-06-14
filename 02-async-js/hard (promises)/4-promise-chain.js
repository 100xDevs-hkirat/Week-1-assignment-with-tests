/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Print out the time it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
 */

function waitOneSecond() {
    return new Promise((resolve) => {
     setTimeout(resolve, 1000);
    })
 }
 
 function waitTwoSecond() {
     return new Promise((resolve) => {
       setTimeout(resolve, 2000);
     })
 }
 
 function waitThreeSecond() {
     return new Promise((resolve) => {
         setTimeout(resolve, 3000);
     })
 }

 async function   calculateTime () {
    let startTime = new Date();
    await waitOneSecond();
    await waitTwoSecond();
    await waitThreeSecond();
    let endTime = new Date();
    let diff1 = endTime.getMilliseconds() - startTime.getMilliseconds();
    console.log("It takes "+diff1+" milliseconds");
    startTime = new Date();
    await Promise.all([waitOneSecond(), waitTwoSecond(), waitThreeSecond()]);
    endTime = new Date();
    let diff2 = endTime.getMilliseconds() - startTime.getMilliseconds();
    
    if (diff1 > diff2)
    {
        console.log("It takes more time than promise.all fuctions");
    }
    else if (diff1 < diff2)
    {
        console.log("It takes less time than promise.all fuctions");
    }
    else
    {
        console.log("It takes equal time as promise.all fuctions");
    }
}

calculateTime();