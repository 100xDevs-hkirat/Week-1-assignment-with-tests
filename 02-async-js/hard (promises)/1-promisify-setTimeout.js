/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function wait(n) {
  let timeToWait = n * 1000;
  const waitingPromise = new Promise((res, rej) => {
    setTimeout(() => {
      res("promise resolved");
    }, timeToWait);
  });
  return waitingPromise;
}

wait(3).then((message) => {
  console.log(message);
});
console.log("hey");
