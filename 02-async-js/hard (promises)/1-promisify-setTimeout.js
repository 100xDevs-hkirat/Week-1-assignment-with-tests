/*
    Write a function that returns a promise that resolves after n seconds have passed, 
    where n is passed as an argument to the function.
*/

function wait(n) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Promise resolved after ${n} seconds`);
        }, n * 1000);
    })
}

console.log('Start');
wait(5).then((res) => {
    console.log(res)
})
console.log('end');