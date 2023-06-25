Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
clock that shows you the current machine time?

Can you make it so that it updates every second, and shows time in the following formats - 

 - HH:MM::SS (Eg. 13:45:23)

 - HH:MM::SS AM/PM (Eg 01:45:23 PM)


function clock(){
    let cnt = 0;
    setInterval(()=>{
        let now = new Date();
        let secs,mins,hrs;
        [secs,mins,hrs] = [now.getSeconds(),now.getMinutes(),now.getHours()];
        let period = hrs >= 12 ? "PM" : "AM";
        secs = secs+cnt;
        mins = secs >= 60 ? mins+1 : mins;
        hrs = mins >= 60 ? hrs+1 : hrs;
        secs%=60
        mins%=60;
        hrs%=60;
        let hrs12 = Math.floor(hrs%12);
        console.clear();
        format24(hrs,mins,secs);
        format12(hrs12,mins,secs,period);
        cnt+=1;
    },1000);
}

function format24(hrs,mins,secs){
    hrs = hrs >= 10 ? `${hrs}`: `0${hrs}`;
    mins = mins >= 10 ? `${mins}`: `0${mins}`;
    secs = secs >= 10 ? `${secs}`: `0${secs}`;
    console.log(`24hr format: ${hrs}:${mins}::${secs}`);
}

function format12(hrs,mins,secs,period){
    hrs = hrs >= 10 ? `${hrs}`: `0${hrs}`;
    mins = mins >= 10 ? `${mins}`: `0${mins}`;
    secs = secs >= 10 ? `${secs}`: `0${secs}`;
    console.log(`12hr format: ${hrs}:${mins}::${secs} ${period}`);
}