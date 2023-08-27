/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function wait(n) {
    console.log("in promise block")
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve()
        }, n * 1000)
    })
}

var n = 3

wait(n).then((resolve) => console.log(`promise returned after ${n} seconds!!`))