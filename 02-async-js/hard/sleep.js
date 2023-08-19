/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 */



// function sleep (seconds) {
//          return new Promise(resolve => setTimeout(resolve , seconds * 1000)) ;
// }

// async function func(){
//      console.log('Sleeping for 5 seconds');
//      await sleep(5);
//      console.log("After 5 seconds");
// }

// console.log("Start");
// func(5);
// console.log("end");


var wait = (ms) => {
   const start = Date.now();
   let now = start;
   while (now - start < ms) {
     now = Date.now();
   }
}

console.log("Executed now");
wait(5000);
console.log("Executed after 5 seconds");

 

  