/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Print how long it took for all 3 promises to resolve.
 */
function wait(n){
    return new Promise((resolve, reject) => {
        // Simulating an asynchronous operation
        setTimeout(() => {
            resolve();
        }, n*1000);
    });
}

function waitOneSecond() {
    return wait(1);
}

function waitTwoSecond() {
    return wait(2);
}

function waitThreeSecond() {
    return wait(3);
}

function calculateTime() {
    const startTime = new Date().getTime(); // Record the start time

    return Promise.all([waitOneSecond(), waitTwoSecond(), waitThreeSecond()])
    .then((results) => {
        const end_time = new Date().getTime();
        var wait = (end_time - startTime) / 1000
    

        console.log('All promises resolved:', wait);
    })
    .catch((error) => {
        console.log('At least one promise rejected:', error);
    });
}

calculateTime()