/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Print out the time it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
 */

function waitOneSecond() {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(1000)
            console.log(`Resolved in >=1000 ms`)
        },1000)
    })
}

function waitTwoSecond(prevVal) {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(2000+prevVal)
            console.log(`Resolved in >=${prevVal+2000} ms`)

        },2000)
    })
}

function waitThreeSecond(prevVal) {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(3000+prevVal)
            console.log(`Resolved in >=${prevVal+3000} ms`)
        },3000)
    })
}

function calculateTime(){
    const start = Date.now();
    let end;
    waitOneSecond()
    .then(val => {return waitTwoSecond(val)})
    .then(val => {return waitThreeSecond(val)})
    .then((val)=>{
        end = Date.now()
        const elap = end - start
        console.log(`FINALLY Resolved in ${elap} ms.`)})
    
}
calculateTime()

//We can observe that the time taken to resolve all the promises in this program (about 6000ms) = 2x that of previous program
// since Promise.all() waits for the longest running promise to resolve(which took 3seconds), it took less time than all promises to resolve one by one(6 seconds)[as in this program]