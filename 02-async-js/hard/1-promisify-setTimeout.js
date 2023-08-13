/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function wait(n) {
    let p = new Promise((resolve) => {
        setTimeout(resolve, n*1000);
    })
    return p
}

console.log(wait(5))

wait(5).then(() => {
    console.log("resolved")
    }
)