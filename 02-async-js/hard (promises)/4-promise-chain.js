/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Print out the time it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
 */

function delay(n){
    return new Promise((resolve) => {
        setTimeout(resolve, n);
    })
}
function waitOneSecond() {
    return delay(1000).then(()=>"1st Promise");
}

function waitTwoSecond() {
    return delay(2000).then(()=> {
        console.log("2nd Promise");
    });
}

function waitThreeSecond() {
    return delay(3000).then(() => console.log("3rd Promise"))
}

function calculateTime() {
    var startTime = new Date();
    return waitOneSecond().then((data) =>{
        console.log(data);
        return waitTwoSecond();
    })
    .then(()=>{
        return waitThreeSecond();
    })
    .then(()=>{
        var endTime = new Date();
        var duration = (endTime - startTime)/1000;
        console.log(`total time taken ${duration} in sec`);
    })
}
calculateTime();