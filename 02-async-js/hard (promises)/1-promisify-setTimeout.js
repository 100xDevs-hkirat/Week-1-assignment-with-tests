/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function wait(n) {
  const promise = new Promise((resolve, reject) => {
    if (isNaN(n)) {
      reject("Argument not a number");
    }
    setTimeout(() => {
      resolve();
    }, n * 1000);
  });
  return promise;
}

wait(1) //waits 1 second
  .then(() => {
    console.log("waited one second");
  })
  .catch((err) => {
    console.error(err);
  });
