/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/
function wait(n) {
  let promise = new Promise(function (resolves) {
    setTimeout(resolves, n);
  });
  return promise;
}

let promise = wait(3000);
console.log(promise);
console.log(
  promise.then(function () {
    console.log("Task Done");
  })
);
