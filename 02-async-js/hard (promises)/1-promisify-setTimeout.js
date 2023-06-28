/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function resolvesAfterSeconds(n) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("resolved");
    }, n * 1000);
  });
}

resolvesAfterSeconds(3).then((result) => {
  console.log(result);
});
