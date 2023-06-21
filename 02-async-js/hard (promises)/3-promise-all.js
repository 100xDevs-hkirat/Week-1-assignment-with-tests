/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Print how long it took for all 3 promises to resolve.
 */


function waitOneSecond() {
    return new Promise(resolve => {
        setTimeout(() => resolve(), 1000);
    })
}

function waitTwoSecond() {
    return new Promise(resolve => {
        setTimeout(() => resolve(), 2000);
    })
}

function waitThreeSecond() {
    return new Promise(resolve => {
        setTimeout(() => resolve(), 3000);
    })
}

function calculateTime() {
    const startTime = new Date().getTime();
    waitOneSecond().then(() => {
        console.log("First completed");
    });
    waitTwoSecond().then(() => {
        console.log("Second completed");
    });
    waitThreeSecond().then(() => {
        console.log("Third completed");
    });
    const endTime = new Date().getTime(); 
    // This won't give the correct time since all the above are async functions and this is a synchronous step.
    return (endTime - startTime) / 1000;
}

console.log(calculateTime());

// Instead wait until all promises are done and then calculate end time.
function calculateRealTime(){
    let startTime = new Date().getTime();
    Promise.all([waitOneSecond(), waitTwoSecond(), waitThreeSecond()]).then(() => {
        let endTime = new Date().getTime();
        let timeTaken = (endTime - startTime) / 1000;
        console.log("Time for all promises to finish")
        console.log(timeTaken);
    })
}

// The real time is close to 3 seconds as 3 is the maximum time of all promises.
calculateRealTime();