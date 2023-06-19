/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Print out the time it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
 */

function waitOneSecond() {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      console.log("one");
      console.log(Date.now());
      resolve("one");
    }, 1000);
  });
}

function waitTwoSecond() {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      console.log("two");
      console.log(Date.now());
      resolve("two");
    }, 2000);
  });
}

function waitThreeSecond() {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      console.log("three");
      console.log(Date.now());
      resolve("three");
    }, 3000);
  });
}

const Before = Date.now();
let after;
waitOneSecond()
  .then((first) => waitTwoSecond())
  .then((Second) => waitThreeSecond())
  .then((third) => {
    after = Date.now();
    calculateTime(Before, after);

    console.log("completed");
  });

function calculateTime(before, after) {
  console.log((after - before) / 1000);
}

let sum = 0;

for (let i = 0; i < 10000000000; i++) {
  sum += 1;
}

console.log(sum);

let s = 0;

for (let i = 0; i < 10000000000; i++) {
  s += 1;
}

console.log("sum", s);

// console.log(["b","a","c"].sort().join.name)
