/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function wait(n) {

    return new Promise(resolve=>{
        setTimeout(()=>{
            console.log(`Resolve after ${n} second`);
        },n)
    })
}

wait(3000);