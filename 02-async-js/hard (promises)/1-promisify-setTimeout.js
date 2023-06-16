/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function wait(n) {
    return new  Promise(resolve=>{
        setTimeout(resolve, n);
    })
    
}

console.log("Start!!");
wait(2000)
.then(()=>{
    console.log("Promise resolved after 2 seconds !!!")
})


