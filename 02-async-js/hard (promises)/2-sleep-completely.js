/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 */


function sleep(seconds) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, seconds * 1000);
  });
}

const prevTime = new Date().getTime();

sleep(3)
  .then(() => {
    const upTime = new Date().getTime();
    const elapsed = upTime - prevTime;
    console.log(`Elapsed time: ${elapsed} ms`);
  })
  .catch((error) => {
    console.error('An error occurred:', error);
  });





  // function busyWait(milliseconds) {
  //   const startTime = new Date().getTime();
  //   const endTime = startTime + milliseconds;
  
  //   while (new Date().getTime() < endTime) {
  //     // Busy wait - do nothing
  //   }
  // }
  
  // const prevTime = new Date().getTime();
  
  // busyWait(3000);
  
  // const upTime = new Date().getTime();
  // const elapsed = upTime - prevTime;
  // console.log(`Elapsed time: ${elapsed} ms`);
  