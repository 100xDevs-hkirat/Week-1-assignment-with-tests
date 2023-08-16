/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function wait(n) {
    return new Promise(function(myResolve) {
        setTimeout(function() {
            myResolve("3 seconds after!!");
        }, n * 1000);
    });
    
}

wait(3).then(function(result) {
    console.log("result",result);
});



