/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

const { rejects } = require("assert")
const { resolve } = require("path/posix")

function wait(n) {
    return new Promise((resolve, rejects) => {
        setTimeout(() => {
            resolve("promise resolved")
            console.log("resolved")
        }, n * 1000)
    })
}
wait(5).then(data => console.log(data))