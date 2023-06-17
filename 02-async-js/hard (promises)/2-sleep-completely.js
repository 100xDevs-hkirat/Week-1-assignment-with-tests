/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 */

function sleep(milliseconds) {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
  }
  
  
async function func() {
    const time = new Date().getTime;
    for (let i = 1; i <= 7; i++) {
        console.log("Before!", time);
        await sleep(5000);
        console.log("After!", time);
    }
  }
  
  func();