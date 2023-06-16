/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/
function wait(seconds) {
  const myPromise = new Promise((resolve) => {
    setTimeout(resolve, seconds * 1000);
  });
  return myPromise;
}

function logTheValue(seconds){
    wait(seconds).then(() => {
        console.log(`${seconds} seconds have passed.`);
      });
}
logTheValue(5)
