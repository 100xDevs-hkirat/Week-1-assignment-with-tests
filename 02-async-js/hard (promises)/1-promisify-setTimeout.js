/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function wait(n) {
  const promise = new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, n * 1000);
  });
  return promise;
}

// wait(3).then(() => console.log("resoved after 3 seconds"));

module.exports = wait; //utility as promise-all.js is using this function
