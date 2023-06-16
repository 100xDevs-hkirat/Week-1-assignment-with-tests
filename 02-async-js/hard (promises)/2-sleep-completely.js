/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 */

function sleep(seconds) {

    let enteredSecond = new Date().getSeconds();
    let counter = 0;


    console.log(new Date().getSeconds())
    while (counter < seconds) {
        let currentSecond = new Date().getSeconds()
        if (currentSecond != enteredSecond) {
            enteredSecond = currentSecond;
            counter++;
        }


    }
    return


}


let seconds = 10;



sleep(seconds)

for (let i = 0; i < 5; i++) {
    console.log("hi");
}

//remaining code


