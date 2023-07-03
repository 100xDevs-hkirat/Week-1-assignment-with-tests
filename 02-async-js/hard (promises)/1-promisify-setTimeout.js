/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function wait(n) {
    return new Promise((resolve)=>{
           setTimeout(()=>{
               resolve('promise resolved');
           },n*1000)
    })
}
wait(10).then(data=>console.log(data));//promise will be resolved after 10 secs