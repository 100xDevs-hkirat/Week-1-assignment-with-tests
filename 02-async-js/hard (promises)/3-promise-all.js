/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Print how long it took for all 3 promises to resolve.
 */


function waitOneSecond() {
    const promise = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('waiting 1 sec');
        },1000);
    });
    return promise;
}

function waitTwoSecond() {
    const promise = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('waiting 2 sec');
        },2000);
    });
    return promise;

}

function waitThreeSecond() {
    const promise = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('waiting 3 sec');
        },3000);
    });
    return promise;

}

function calculateTime() {
    let startTime = new Date();
     return Promise.all([waitOneSecond(),waitTwoSecond(),waitThreeSecond()]).then((res)=>{
        let endTime = new Date();
        console.log(endTime - startTime);
        console.log("this much seconds it took");
     });

}

calculateTime();