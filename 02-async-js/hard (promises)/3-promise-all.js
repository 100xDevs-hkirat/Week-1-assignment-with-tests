/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Print how long it took for all 3 promises to resolve.
 */


function waitOneSecond() {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(`resolved in 1 second`)
        },1000)
    })
}

function waitTwoSecond() {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(`resolved in 2 seconds`)
        },2000)
    })
}

function waitThreeSecond() {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(`resolved in 3 seconds`)
        },3000)
    })
}

function resolveAll(){
    return Promise.all([waitOneSecond(),waitTwoSecond(),waitThreeSecond()])
}


function calculateTime() {
    const startTime = Date.now();
    resolveAll()
    .then((val)=>{
        const endTime = Date.now();
        const totalTime = endTime - startTime;
        console.log(`took a total of ${totalTime}ms for all promises to resolve`)
    })
    .catch((err)=> {
        console.log(`An ${err} occured.`)
    })

}
calculateTime()