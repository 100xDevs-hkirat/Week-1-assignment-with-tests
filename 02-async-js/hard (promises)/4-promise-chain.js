/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Print out the time it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
 */

function waitOneSecond() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("First finished");
    }, 1000);
  });
}

function waitTwoSecond() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Second finished");
    }, 2000);
  });
}

function waitThreeSecond() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Third finished");
    }, 3000);
  });
}

function calculateTime() {
  let initial = Date.now();
  const func1 = waitOneSecond();
  func1.then((res) => {
    console.log(res);
  });
  const func2 = waitTwoSecond();
  func2.then((res) => {
    console.log(res);
  });
  const func3 = waitThreeSecond();
  func3.then((res) => {
    console.log(res);
    let final = Date.now();
    console.log("Total time required is: " + (final - initial));
  });
}
calculateTime();
