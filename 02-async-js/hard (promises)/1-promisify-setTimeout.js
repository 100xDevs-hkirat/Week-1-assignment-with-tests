/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function wait(n) {
    return new Promise (function(resolve, reject) {
        setTimeout(resolve, n);
    })
}
wait(5000).then(function(){
    console.log("HEY THERE")
});
console.log("check console start")