/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function wait(n) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(n + " seconds passed");
    }, n * 1000);
  });
}

const ans = wait(5);
ans.then((res) => {
  console.log(res);
});
