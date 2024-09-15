/*
  Counter without setInterval
    Without using setInterval, try to code a counter in Javascript.
    There is a hint at the bottom of the file if you get stuck.
    (Hint: setTimeout)
*/

let timeoutId;

function counter(n) {
    console.clear();
    console.log(n);
    timeoutId = setTimeout(function() {
        counter(n + 1);
    }, 1000);

}

// Stop the timer after 10 seconds
function stopTimer() {
    clearTimeout(timeoutId);
}

// Start the counter
counter(1);

// Call stopTimer after 10 seconds
setTimeout(stopTimer, 10000);

module.exports = {counter , stopTimer};





