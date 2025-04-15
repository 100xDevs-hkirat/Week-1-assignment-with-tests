/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function wait(n) {
    const myPromise = new Promise((resolve, reject) => {
        // Simulating an asynchronous operation
        setTimeout(() => {

            // Fulfill the promise
            if(!resolve(n)){
                reject(new Error('Promise rejected')); // Reject the promise
            } 
        }, n*1000);
    });

    // Using the promise
    myPromise
    .then((result) => {
        console.log('Printing after ', result, 'seconds');
    })
    .catch((error) => {
        console.log('Promise rejected with error:', error);
    });
}

wait(5)