// ## Counter without setInterval

// Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.

// Approach - 0
var counter = 0;
function infiniteLoop() {
  setTimeout(() => {
    counter++;
    console.log(`${counter} - Approach 0`);
    infiniteLoop();
  }, 1000);
}

infiniteLoop();

// Approach - 1
var counter1 = 0;
function randomDelay(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, ms);
  });
}
async function infinteLoop1() {
  // Step 1: Delay of 1 second.
  await randomDelay(1000);
  counter1++;
  console.log(`${counter1} - Approach 1`);
  infinteLoop1();
}

infinteLoop1();






































































// (Hint: setTimeout)