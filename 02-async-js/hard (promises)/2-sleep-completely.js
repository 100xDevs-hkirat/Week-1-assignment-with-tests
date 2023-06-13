/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 */

function sleep(seconds) {
  console.log(`sleeping from ${seconds} seconds`);
  const start = Date.now();
  const end = start + seconds * 1000;

  while (Date.now() < end) {
    const doingnothing = true;
  }
  console.log(`thread is now active`);
}

sleep(3);
console.log("this should be printed after 3 seconds");
// i thought we can do this using the promised also using the set timeout, we will do nothing until the promise is resolved

// not working lol

// function wait(n) {
//   const promise = new Promise((resolve) => {
//     setTimeout(() => {
//       resolve((state = true));
//     }, n * 1000);
//   });
//   return promise;
// }

// function sleep2(n) {
//   console.log(`sleeping from ${n} seconds`);
//   let flag = true;
//   const promise = wait(n);
//   while (flag) {
//     if (promise.isResolved()) flag = false;
//   }
// }

// sleep2(3);
