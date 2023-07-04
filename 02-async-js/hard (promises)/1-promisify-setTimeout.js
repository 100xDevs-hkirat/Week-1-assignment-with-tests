/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function wait(n) {
    let time = new Promise((resolve) => {
        setInterval(resolve, n * 1000);
    })
    return time;
}

wait(5).then(() => {
    console.log(`Promise resolving after 5 sec`)
})