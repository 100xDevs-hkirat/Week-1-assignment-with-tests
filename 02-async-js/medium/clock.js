let counter = 0

function ctr(){
    
    date = new Date();

    let hrs = date.getHours();
    let mins = date.getMinutes();
    let secs = date.getSeconds();
    hrs = String(hrs).padStart(2,"0");
    mins = String(mins).padStart(2,"0");
    secs = String(secs).padStart(2,"0");
    let mn = "AM"
    console.log(` 24 hour notation: ${hrs}:${mins}:${secs}`)
    if (hrs > 11){
        hrs -= 12
        mn = "PM"
    };
    console.log(` AM/PM notation: ${hrs}:${mins}:${secs} ${mn}`)
};

setInterval(ctr, 1000)

