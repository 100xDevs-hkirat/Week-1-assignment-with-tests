/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function wait(n) {
    const success=false;
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(success)
                return resolve("Promise is resolved")
            else
                return reject(new Error("Couldn't resolve"));

            },n*1000);

    });
}

wait(5).then((message)=>console.log(message))
.catch((error)=>console.log("Error  occured",error));