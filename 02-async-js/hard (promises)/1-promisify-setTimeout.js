/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function wait(n) {
    var pro = new Promise(solve => {
        setTimeout(solve, n*1000);
    });

}

wait(4).then(()=>{
    console.log("4 seconds have passed");
})
.catch(error => {
    console.error("error occured: ",error);
})