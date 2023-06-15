/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 */
//var seconds=10;
function sleep(seconds) {
    seconds*=1000;
    const sharedArray = new Int32Array(new SharedArrayBuffer(4));
    Atomics.wait(sharedArray, 0, 0, seconds);
  }
console.log("Before Sleep...!");
sleep(10);
console.log("After the sleep");
  
// var seconds=10000;
// function sleep(seconds){
//        setTimeout(() => {
//         console.log("sleeping done...!!");
//        }, seconds);
// }
// (async ()=>{
//     console.log("Before Sleep...!");
//     await sleep(seconds);
//     console.log("After the sleep");
// })();

// var milliseconds=10000;
// function sleep(milliseconds) {
//     const startTime = Date.now();
//     while (Date.now() - startTime < milliseconds) {
//     }
//  }
//  console.log("Before sleep...!")
// sleep(milliseconds);
// console.log("The sleeping is done");
//Learning the Promise's
// var seconds=10000;
// async function sleep (seconds) {
//       let p1 = new Promise((resolve,reject)=>{
//         setTimeout(() => {
//            // console.log("Finally the waiting is done...!!");
//            resolve(78);
//         }, seconds);
//       })
//       let p2= new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             //console.log("The 2nd one is here....!!");
//             resolve(90);
//         }, seconds-3000);
//       })
//       let newp1= await p1
//       let newp2=await p2
//       return [newp1,newp2];
// }
// var vals=sleep(seconds);
// vals.then((value)=>{
//     console.log(value);
// })
// console.log("Afer the waiting i am back....!!");