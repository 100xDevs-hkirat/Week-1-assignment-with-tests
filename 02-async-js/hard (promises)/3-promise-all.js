/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Print how long it took for all 3 promises to resolve.
 */

function waitOneSecond() {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      resolve("one");
    }, 1000);
  });
}

function waitTwoSecond() {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      resolve("two");
    }, 2000);
  });
}

function waitThreeSecond() {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      resolve("three");
    }, 3000);
  });
}

const callThree = () => {
  const oneSeocnd = waitOneSecond();
  const twoSecond = waitTwoSecond();
  const threeSecond = waitThreeSecond();
  return [oneSeocnd, twoSecond, threeSecond];
};



const callAll = callThree();

let after;

Promise.all(callAll).then(function (values) {
  console.log(values);
  after = Date.now();
  calculateTime(Before, after);
});

function calculateTime(before, after) {
  console.log((after - before) / 1000);
}
let sum = 0;

for (let i = 0; i < 10000000000; i++) {
  sum += 1;
}

console.log(sum);
