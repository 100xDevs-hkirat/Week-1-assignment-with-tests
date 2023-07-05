/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function wait(n) {
 function promisebody(resolve){
     setTimeout(resolve,1000*n);
 }
 function returnPromise(){
     var ans = new Promise(promisebody);
     return ans;
 }
 var result = returnPromise();
 console.log(result);
}

wait(5);