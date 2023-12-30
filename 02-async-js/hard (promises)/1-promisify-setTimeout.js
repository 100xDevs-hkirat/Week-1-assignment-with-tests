/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/
function wait(n) {
    let prom  = new Promise((resolve) => {
        setTimeout(resolve, n)
    })
    return prom;
}
function print(){
    console.log("promise resolved");
}

var promise = wait(10000).then(print)