/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 */
async function sleep(seconds) {
  const startTime = Date.now();
  while (Date.now() - startTime <= seconds * 1000) {}
}
sleep(3);
console.log('Hey!');

/* 
Let's assume 
Date.now() = 1654186380000 (corresponding to February 1, 2022, 12:13:00 UTC)
startTime = 1654186370000 (corresponding to February 1, 2022, 12:12:50 UTC)
seconds = 10

1654186380000 - 1654186370000 = 10000 milliseconds. */