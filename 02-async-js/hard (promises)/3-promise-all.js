/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Print how long it took for all 3 promises to resolve.
 */


function waitOneSecond() {
    return new Promise(function(resolve){
        setTimeout(function(){resolve("done")}, 1000);
    })

}

function waitTwoSecond() {
    return new Promise(function(resolve){
        setTimeout(function(){resolve("done")}, 2000);
    })

}

function waitThreeSecond() {
    return new Promise(function(resolve){
        setTimeout(function(){resolve("done")}, 3000);
    })

}

function allPromises() {
    const promise1 = waitOneSecond();
    const promise2 = waitTwoSecond();
    const promise3 = waitThreeSecond();

    return Promise.all([promise1, promise2, promise3])
}


// allPromises().then(function(result) {
//     console.log(result);
// })

function calculateTime() {
    var startTime = performance.now();
    return Promise.all([waitOneSecond(), waitTwoSecond(), waitThreeSecond()]).then(
        function(){
            const endTime = performance.now();
            const runtime = endTime - startTime;
            console.log('All promises resolved in ' + runtime + ' milliseconds')
        }
    )  
    
}




console.log(calculateTime())