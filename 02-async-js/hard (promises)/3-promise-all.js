/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Print how long it took for all 3 promises to resolve.
 */



function waitOneSecond() {
    return new Promise(resolve=>{
        setTimeout(()=>{
        resolve("This promise is resolved after 1 second !!!")   
        },1000)
    })
}

function waitTwoSecond() {
    return new Promise(resolve=>{
        setTimeout(()=>{
            resolve("This promise is resolved after 2 seconds !!! ")
        },2000)

    })

}

function waitThreeSecond() {
    return new Promise(resolve=>{
        setInterval(()=>{
            resolve("This promise is resolved after 3 seconds !!!")
        },3000)
    })

}

function calculateTime() {
const startTime = new Date().getTime();

const promise1=waitOneSecond();
const promise2=waitTwoSecond();
const promise3=waitThreeSecond();
Promise.all([promise1, promise2, promise3])
.then(values =>{
    const endtime = new Date().getTime();
    const timeNeeded = endtime-startTime;
    console.log("all promises resolved !!!");
    console.log(`Duration was ${timeNeeded} `);
    console.log("values");

})

}

calculateTime();