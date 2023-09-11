/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function wait(n) {
  return new Promise((resolve, reject) => {
    if (n < 0) {
      reject(new Error("Delay time cannot be negative."));
    } else {
      setTimeout(() => {
        resolve(`Waited for ${n} seconds.`);
      }, n * 1000); // Convert seconds to milliseconds
    }
  });
}
wait(5)
  .then((message) => {
    console.log(message); // Will print "Waited for 5 seconds."
  })
  .catch((error) => {
    console.error(error.message);
  });
