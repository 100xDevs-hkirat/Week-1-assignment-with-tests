// /*
//     Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
// */

// function wait(n) {

// }

let p = new Promise((resolve, reject) => {

    let a = 2;
    let arr = ["mani", 22, 2002]

    if (a == 2) {
        resolve(arr);
    } else[
        reject("error occured")
    ]

})

p.then((message) => {
    console.log(message)

}).catch((error) => {
    console.log(err)

})