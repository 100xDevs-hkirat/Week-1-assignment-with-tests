/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Print how long it took for all 3 promises to resolve.
 */

function delay(ms){
    return new Promise((res)=>{
        setTimeout(res,ms)
    })
}
function waitOneSecond() {
    return delay(1000).then(()=>"1st promise")
}

function waitTwoSecond() {
    return delay(2000).then(()=>"second promise")
}

function waitThreeSecond() {
    return delay(3000).then(()=>"third promise")
}

function calculateTime() {
    let startTime = new Date()
    return Promise.all([
        waitOneSecond(),
        waitTwoSecond(),
        waitThreeSecond()
    ]).then((res)=>{
        let endTime = new Date()
        let duration = (endTime-startTime)/1000
        console.log(res)
        console.log(`waiting time is ${duration}`)
    })

}
calculateTime()