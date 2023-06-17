/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
Hint - use Date class exposed in JS
*/

function calculateTime() {
    return performance.now();
}

let startTime = calculateTime();

function sumItUp(n) {

    var sum = 0;
    for (let i = 1; i <= n; i++){
        sum += i;
    }
    return sum;
}

let endTime = calculateTime();

let executionTime = endTime - startTime;
console.log("Execution Time is : ", executionTime/1000, " seconds!");

//sumItUp(100);
//sumItUp(100000);
sumItUp(1000000000);



// var currentDate = new Date();
// //currentDate.getSeconds();


// function calculateTime() {
//     return currentDate.getSeconds();
// }

// let startTime = calculateTime();


// function sumItUp(n) {

//     var sum = 0;
//     for (let i = 1; i <= n; i++){
//         sum += i;
//     }
//     return sum;
// }


// let endTime = calculateTime();

// let executionTime = endTime - startTime;
// console.log("Execution Time is : ", executionTime);

// //sumItUp(100);
// //sumItUp(100000);
// sumItUp(1000000000);