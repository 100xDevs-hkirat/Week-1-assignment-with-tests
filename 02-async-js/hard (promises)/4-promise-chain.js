/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Print out the time it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
 */
function delay(ms){
    return new Promise((res)=>{
        setTimeout(res,ms)
    })
}
function waitOneSecond() {
    return delay(1000).then(()=>"first promise")
}

function waitTwoSecond() {
    return delay(2000).then(()=>"second promise")
}

function waitThreeSecond() {
    return delay(3000).then(()=>"third promise")
}

function calculateTime() {
    let start = new Date()
    return waitOneSecond().then((data) =>{
        console.log(data);
        return waitTwoSecond();
    })
    .then((data)=>{
        console.log(data)
        return waitThreeSecond();
    })
    .then((data)=>{
        let end = new Date()
        let duration = (end-start)/1000;
        console.log(data)
        console.log(`time required is ${duration}`)
    })
}
calculateTime()