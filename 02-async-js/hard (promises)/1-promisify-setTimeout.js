/*
    Write a function that returns a promise that resolves after n seconds have passed, 
    where n is passed as an argument to the function.
*/
const TIME_TO_WAIT = 10;

function wait(n) {
    let time = n * 1000;

    return new Promise((resolve) => {
        setTimeout(resolve, time);
    })
}

wait(TIME_TO_WAIT).then(() => console.log('Statement: ', `I have been waiting for ${TIME_TO_WAIT} seconds`));

console.log('MOVED ON WITH: ', 'In the meanwhile, I was run');
