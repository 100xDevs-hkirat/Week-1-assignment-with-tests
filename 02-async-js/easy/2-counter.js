// let counter = 1, lastPrintTime = new Date();
// while (true) {
//     if (new Date() - lastPrintTime >= 1000) {
//         console.log(counter);
//         counter += 1;
//         lastPrintTime = new Date();
//     }
// }

//setTimeout approach
let counter2 = 1;
setTimeout(printAndIncrementCounter, 1000)

function printAndIncrementCounter() {
    console.log(counter2)
    counter2 += 1;
    setTimeout(printAndIncrementCounter, 1000);
}