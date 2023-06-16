/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Print out the time it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
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

        setTimeout(resolve, 2000)

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
    const currSecond = currentDate.getSeconds();
    console.log(currSecond)

    waitOneSecond().then(
        () => {
            waitTwoSecond().then(
                () => {
                    waitThreeSecond().then(() => {
                        const newDate = new Date();
                        const newSeconds = newDate.getSeconds();
                        console.log(currSecond)
                        console.log(newSeconds)
                        console.log(newSeconds - currSecond)


                    })
                })
        }
    )

}

calculateTime();