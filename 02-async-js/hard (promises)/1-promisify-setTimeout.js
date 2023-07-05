/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function wait(n) {
    return new Promise((res) => {
        setTimeout(res, n * 1000);
    })
}

wait(2).then(() => {
    console.log("Wait over for 2s");
})

wait(5).then(() => {
    console.log("Wait over for 5s");
})

wait(10).then(() => {
    console.log("Wait over for 10s");
})
wait(15).then(() => {
    console.log("Wait over for 15s");
})