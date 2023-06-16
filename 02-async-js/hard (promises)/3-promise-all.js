/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Print how long it took for all 3 promises to resolve.
 */


function waitOneSecond() {
    return new Promise((resolve, reject) => {
        const currentDate = new Date()
        const currSecond = currentDate.getSeconds();
        console.log(currSecond)

        setTimeout(resolve, 1000)

    })

}

function waitTwoSecond() {

    return new Promise((resolve, reject) => {
        const currentDate = new Date()
        const currSecond = currentDate.getSeconds();
        console.log(currSecond)

        setTimeout(resolve('hi'), 2000)

    })

}

function waitThreeSecond() {

    return new Promise((resolve, reject) => {
        const currentDate = new Date()
        const currSecond = currentDate.getSeconds();
        console.log(currSecond)
        setTimeout(resolve, 3000)

    })

}

function calculateTime() {
    const currentDate = new Date()
    const currMinute = currentDate.getMinutes();
    const currSecond = currentDate.getSeconds();

    let ans = 0
    Promise.all([waitOneSecond(), waitTwoSecond(), waitThreeSecond()]).then(() => {
        console.log("entered")
        const newDate = new Date();
        const newSeconds = newDate.getSeconds();
        console.log(currSecond)
        console.log(newSeconds)
        console.log(newSeconds - currSecond)

    })


}

calculateTime();
console.log("synchronously execting")