/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/
function wait(n) {
    var promiseobj= new Promise((resolves)=>{
        setTimeout(()=>{resolves()},n*1000);
    });
    return promiseobj;
}
wait(5).then(()=>{console.log("i have waited")});