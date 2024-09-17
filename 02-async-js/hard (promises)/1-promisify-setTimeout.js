/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function wait(n) {
  const a = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, n * 1000);
  });
  a.then(() => {
    console.log(`${n} seconds have elapsed`);
  });
}

wait(10);
