/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function wait(n) {

    return new Promise( (resolve, reject) => {
        setTimeout(resolve, n * 1000);
    });
}

const startTime=Date.now();
wait(2).then(()=>{
    console.log(Date.now()-startTime);
});
