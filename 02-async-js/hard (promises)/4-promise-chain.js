/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Print out the time it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
 */

function waitOneSecond() {
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve();
        },1000)
    })
}

function waitTwoSecond() {
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve();
        },2000);
    });
}

function waitThreeSecond() {
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve();
        },3000);
    });
}

function calculateTime() {
    let al, seq;

    let start = Date.now();
    Promise.all([waitOneSecond(), waitTwoSecond(), waitThreeSecond()]).then(()=>{
        let end= Date.now();
        al = Date.now()-start;
    }).catch((err)=>{
        console.log(err);
    })

    let first=Date.now();
    waitOneSecond().
    then(()=>waitTwoSecond()).
    then(()=>waitThreeSecond()).
    then(()=>{
        let last=Date.now();
        seq=last-first;
        console.log(al>seq?`Promise.all takes more time ${al}`: `seq. takes more time ${seq}`);
    }).catch((err)=>{
        console.log(err);
    })
}

calculateTime();