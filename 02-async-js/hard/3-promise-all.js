/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Print how long it took for all 3 promises to resolve.
 */


function waitOneSecond() {
    return new Promise(resolve => setTimeout(() => resolve(1), 1000));
}

function waitTwoSecond() {
    return new Promise(resolve => setTimeout(() => resolve(2), 2000))
}

function waitThreeSecond() {
    return new Promise(resolve => setTimeout(() => resolve(3), 3000));
}

function calculateTime() {
    const start = performance.now();

    Promise.all([waitOneSecond(),waitTwoSecond(),waitThreeSecond()])
    .then((results)=>{
    const end = performance.now();
    const elapsed = (end - start)/1000;
    console.log('Results:', results);
    console.log(
        `All promises resolved in ${elapsed}seconds`
    );
    })
    .catch((error)=>{
        console.error(error);
    })

}
calculateTime();