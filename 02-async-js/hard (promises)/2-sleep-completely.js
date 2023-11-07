function promiseBody(resolve,reject){
var timeNow =Date.now();
while((Date.now()-timeNow)/1000<=seconds)
{

}
resolve('busy wait done')
}

function sleep (seconds) {
    var promise = new Promise(promiseBody);
    return promise;
}

function printfn() {
    console.log('thread was halt for'+' '+seconds+' '+'seconds' );
}
var seconds=5;
var answer= sleep(seconds);
answer.then(printfn);
