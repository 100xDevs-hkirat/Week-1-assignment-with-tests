//Create a counter in JavaScript
//It should go up as time goes by in intervals of 1 second

let counter = 0;

function incrementCounter() 
{
    console.log(counter);
    counter++;
}

setInterval(incrementCounter, 1 * 1000);
