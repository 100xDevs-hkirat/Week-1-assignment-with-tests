/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function wait(n) {

    const pr = new Promise(function(resolve,reject) {

        if (n){
            resolve(n);
        }

    })
    return pr;
} 
const promise = wait(4);
promise.then((n) => setTimeout(() => console.log(100), n * 1000));
