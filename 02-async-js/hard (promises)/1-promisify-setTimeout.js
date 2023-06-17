/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function wait(n) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Lets resolve!");
            resolve();
        }, (n * 1000));
        if (err) reject();
    });
}


wait(4);


/* function wait(n) {
    return new Promise(resolve => {
      setTimeout(resolve, n * 1000);
    });
} */

//wait(4);