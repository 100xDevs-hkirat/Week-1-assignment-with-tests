const fs= require('fs');
function promiseBody(resolve,reject){
    setTimeout(resolve,n*1000);
}
function printfn() {
    console.log('promise complete');
}

function wait(n) {
    var promise = new Promise(promiseBody);
    return promise;
}
var n =5;
var answer = wait(n);
answer.then(printfn);
