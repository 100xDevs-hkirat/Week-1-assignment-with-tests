/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/
function wait(n) {
    function promiseBody(resolve, reject) {
        setTimeout(resolve, n)
    }
    return new Promise(promiseBody);
}

wait(5000).then(() => {
    console.log("After 5000ms")
});
console.log("Hello")
