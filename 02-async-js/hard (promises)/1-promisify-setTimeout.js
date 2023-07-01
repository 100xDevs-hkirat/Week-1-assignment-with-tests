/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function wait(n) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Returned after ${n} seconds`);
    }, n * 1000);
  });
}

wait(5)
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });
