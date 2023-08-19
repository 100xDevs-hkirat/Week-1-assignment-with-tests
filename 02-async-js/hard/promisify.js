/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function wait(n) {
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                resolve()
            },n*1000);
        })
}

wait(5)
.then(()=>console.log("done"))
.catch((err)=>console.log(err))

const res = wait(5) ;
console.log(res);
