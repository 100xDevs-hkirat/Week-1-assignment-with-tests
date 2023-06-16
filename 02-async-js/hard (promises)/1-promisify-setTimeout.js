/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function wait(n) {
    return new Promise((res)=>{
        setTimeout(res,n)
    })
}
console.log('i got thread first')
wait(2000).then(()=>{
    console.log('i was waiting')
}).catch((err)=>{
    console.log("oops error found")
})
console.log('i got thread second')