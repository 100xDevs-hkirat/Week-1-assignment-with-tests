// ## Counter without setInterval

// Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.

let seconds = 0;

const timeout = () => {
  setTimeout(() => {
    console.log(++seconds);
    timeout();
  }, 1000);
};

timeout();
// (Hint: setTimeout)
