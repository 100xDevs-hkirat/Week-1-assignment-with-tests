/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function wait(n) {
    var promise = new Promise(function promiseBody(resolve){
        setTimeout(resolve, n * 1000);
    })
    return promise;
}

function print() {
    console.log("Timer complete!");
}

wait(1).then(print);