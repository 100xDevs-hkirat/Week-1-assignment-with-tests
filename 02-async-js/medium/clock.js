let currTime = new Date();

let hrs = currTime.getHours();
let mins = currTime.getMinutes();
let secs = currTime.getSeconds();

setInterval(()=> {
    secs++;
    if(secs > 59) {
        secs = 0;
        mins++;

        if(mins > 59) {
            mins = 0;
            hrs++;
        }

        if(hrs > 23) {
            hrs = 0;
            mins = 0;
            secs = 0;
        }
    }

    console.log(`${hrs} : ${mins} : ${secs}`);
}, 1000);
