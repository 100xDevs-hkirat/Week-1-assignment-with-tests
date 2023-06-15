/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/
//var n=10000;
function wait(n) {
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log('The function is resolved, Done');
           //resolve('this is done');
        }, n);
     })
   // console.log(p1);
    // let p1=new Promise((resolve,reject)=>{
    //     setTimeout(() => {
    //         resolve('The function is resolved...!!');
    //     }, n);
    // })
    // p1.then((value)=>{
    //     console.log(value);
    // })
}
wait(n);