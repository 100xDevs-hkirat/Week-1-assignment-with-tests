/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function wait(n) {
    return new Promise((resolve) => {
        setTimeout(resolve,n*1000);
    });
}

// Will print "Hello World" after 3 seconds
wait(3).then(() => {
    console.log("Hello World!");
});