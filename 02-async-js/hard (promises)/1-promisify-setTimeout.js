/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function wait(n) {
    return new Promise((resolve) => {
        setTimeout(resolve, n * 1000)
    })
}
const waitTime = 5
wait(waitTime).then(() => {
    console.log(`resolved after ${waitTime} seconds`)
})