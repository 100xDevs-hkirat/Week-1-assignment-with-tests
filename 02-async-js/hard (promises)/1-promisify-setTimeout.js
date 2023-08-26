/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function wait(n) {
    return new Promise((resolve,reject) => {
        setTimeout( () => {
            resolve(n + "seconds passed")
        }, n*1000);
    })
}

console.log("starting...")
wait(2).then((res) =>{
    console.log("Success " + res)
}).catch(()=> {
    console.log("Failure")
})