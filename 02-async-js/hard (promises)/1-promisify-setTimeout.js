/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function wait(n) {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Done");
    }, n * 1000);
  });

  promise.then((res) => console.log(res)).catch((err) => console.log(err));
}

wait(5);
