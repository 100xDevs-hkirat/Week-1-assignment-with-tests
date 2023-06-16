/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function wait(n) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (n > 1) {
          resolve(n);
        } else {
          reject(new Error("User Not Found"));
        }
      }, 1000);
    });
  }
  
  wait(7)
    .then((n) => {
      console.log("Fulfilled", n);
    })
    .catch((error) => {
      console.log("Not Fulfilled", error);
    });