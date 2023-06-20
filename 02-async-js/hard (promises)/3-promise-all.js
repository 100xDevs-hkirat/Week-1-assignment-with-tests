/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Print how long it took for all 3 promises to resolve.
 */


function waitOneSecond() {
    return new Promise((res) => setTimeout(() => res('1 sec'), 1000))
}

function waitTwoSecond() {
    return new Promise((res) => setTimeout(() => res('2 sec'), 2000))
}

function waitThreeSecond() {
    return new Promise((res) => setTimeout(() => res('3 sec'), 3000))
}

function calculateTime() {
    let startTime = new Date().getTime();

    Promise.all([waitOneSecond(), waitTwoSecond(), waitThreeSecond()]).then((val) => {
        console.log('result: ', val);
        let endTime = new Date().getTime();
        console.log(endTime - startTime);
    })
}

calculateTime();