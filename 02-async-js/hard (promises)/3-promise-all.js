/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Print how long it took for all 3 promises to resolve.
 */

function delay(n){
    return new Promise((resolve) => {
        setTimeout(resolve, n)
    })
}
function waitOneSecond() {
    return delay(1000).then(()=> "1st promise")
}

function waitTwoSecond() {
    return delay(2000).then(()=> "2nd promise")
}

function waitThreeSecond() {
    return delay(3000).then(()=> "3rd promise")
}

function calculateTime() {
    var startTime = new Date()
    return Promise.all([waitOneSecond(), waitTwoSecond(), waitThreeSecond()])
   .then((results) => {
    var endTime = new Date()
    duration = (endTime-startTime)/1000
    console.log(results);
    console.log(`total time taken ${duration} in sec`)
});
}
calculateTime();