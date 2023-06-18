/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 */

function sleep (seconds) {
    const startTime = new Date().getTime();
    while (true) {
      const currentTime = new Date().getTime();
      if (currentTime - startTime >= seconds*1000) {
        break;
      }
    }
    console.log(Date.now()-startTime);
}

sleep(4);