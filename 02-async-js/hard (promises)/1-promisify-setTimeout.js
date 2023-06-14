/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function wait(n) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
                resolve(n);
            }, n * 1000);
    });
}


wait(4)
    .then(function (data) {
        console.log(`resolved after ${data} seconds`);
    })
    .catch(function (error) {
        console.log(error);
    });
