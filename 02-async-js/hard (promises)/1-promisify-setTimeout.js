/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function Counter(duration) {
    var time = duration*1000;
    return new Promise(function(resolve) {
    var interval = setTimeout(resolve,time);
    });
}

function wait(n) {
    Counter(n).then(()=>{
        console.log(`setTimeOut after ${n}`);
    })
}

wait(10);