/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function wait(n) {
    return new Promise((resolve) => {
        setTimeout(() => {
          resolve("Hello World!")
       }, n * 1000);
     }
    )
}

wait(1).then(res => console.log(res));
