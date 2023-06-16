/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function wait(n) {
  return new Promise((res) => {
    setTimeout(res, n);
  });
}
console.log("I got thread first....");
wait(1000)
  .then(() => {
    console.log("I was waiting......");
  })
  .catch((err) => {
    console.log("Error found...");
  });
console.log("I got thread...");
