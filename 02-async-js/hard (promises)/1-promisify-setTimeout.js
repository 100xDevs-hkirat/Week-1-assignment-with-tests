/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function delay(n) {
    return new Promise((resolve, reject) => {
        setTimeout(()=> {
            resolve();
        }, n*1000);
    });
}

delay(5)
.then(()=> {
    console.log('5 seconds have passed');
})
.catch((err)=> {
    console.log(err);
});