/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function wait(n) {
    return new Promise(resolve => setTimeout(() => resolve(1), n));
}

wait(1000).then((result)=>{
    console.log('promise resolved in one second')
    console.log(result);
}).catch((error)=>{
    console.error('Promise rejected with error:', error);
})