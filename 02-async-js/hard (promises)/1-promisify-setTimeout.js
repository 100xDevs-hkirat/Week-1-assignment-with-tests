/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function wait(n) {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      resolve("Completed");
    }, n * 1000);
  });
}

const n = 7;
const waited = wait(n);

console.log(waited);

waited.then(function (status) {
  console.log(waited);
  console.log(status);
  console.log(`promise completed in ${n} seconds`);
});
