//  Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
// clock that shows you the current machine time?

// Can you make it so that it updates every second, and shows time in the following formats - 

//  - HH:MM::SS (Eg. 13:45:23)

//  - HH:MM::SS AM/PM (Eg 01:45:23 PM)

//24 hour first

const d = new Date();
let h = d.getHours();
let m = d.getMinutes();
let s = d.getSeconds();


function changetime(val){
    if(s!=59){
        s+=1;
    } else if(m!=59){
        s=0;
        m+=1;
    } else if(h!=23){
        m=0;
        h+=1;
    } else{
        h=0;
    }
    let time;
    let ampm = "AM";
    if(val===true) {
        time = h+":"+m+":"+s;
    }
    else {
        if(h>12){
            hr = h-12;
            ampm = "PM";
            time = hr+":"+m+":"+s+" "+ampm;
        } else {
            time = h+":"+m+":"+s+" "+ampm;
        }
    }
    addZero(time);
    console.clear();
    console.log(time);
}

let format_24 = () =>  {
    let frmt_24 = true;
    setInterval(()=>changetime(frmt_24),1000);
    
}

format_24();