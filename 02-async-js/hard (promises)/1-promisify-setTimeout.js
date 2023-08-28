/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function wait(n) {
    return new Promise((resolve) => {
        setTimeout(()=>{
            resolve();
        },n);
    });
}

let n=2000;
wait(2000).then(()=>{
    console.log(`resolve after ${n}`)
}).catch((err)=>{
    console.log(err)
})