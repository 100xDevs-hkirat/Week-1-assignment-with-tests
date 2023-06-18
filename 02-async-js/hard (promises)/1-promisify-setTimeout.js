/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/
//short concise version
function wait(n){
    function printAfterN(){
        return new Promise((resolve) => {
            setTimeout(resolve, n*1000);
        })
    }
    printAfterN().then(() => {
        console.log(`${n} seconds have passed`);
    });
}

//BIG EXPLAINED WAY
// function wait(n){
//     function promisebody(resolve){
//         setTimeout(resolve, n*1000); //after n second resolve thing send it to .then
//     }
//     function printAfterN(){
//         return new Promise(promisebody);
//     }
//     let x = printAfterN();
//     x.then(() => {
//         console.log(`${n} seconds have passed`)
//     });
// }




// callback way
// function wait(n) {
//     function callMeLater(){
//         console.log(`${n} seconds have passed`);
//     }
//     setTimeout(callMeLater, n*1000);
// }

wait(3);


