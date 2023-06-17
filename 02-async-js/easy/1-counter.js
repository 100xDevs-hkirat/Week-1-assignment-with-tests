// ## Create a counter in JavaScript

let counter = 0;

function count(){
    console.clear()
    console.log(counter);
    counter += 1;
}

setInterval(count, 1000);

// We have already covered this in the second lesson, but as an easy recap try to code a counter in Javascript
// It should go up as time goes by in intervals of 1 second