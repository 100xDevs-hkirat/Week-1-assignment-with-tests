/**
 * Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
clock that shows you the current machine time?

Can you make it so that it updates every second, and shows time in the following formats - 

 - HH:MM::SS (Eg. 13:45:23)

 - HH:MM::SS AM/PM (Eg 01:45:23 PM)

 */

const date = new Date();
let hh = date.getHours();
let mm = date.getMinutes();
let ss = date.getSeconds();
let zone = 'AM';
const handleTime = () =>{
    ss += 1
    let minAdd = Math.floor(ss / 60);
    ss %= 60;
    mm += minAdd;
    let hourAdd = Math.floor(mm / 60);
    mm %= 60;
    hh += hourAdd;
    if (hh > 12) {
        zone = zone==='AM'?'PM':'AM';
    }
    hh %= 12;
    console.log(`${hh}:${mm}:${ss} ${zone}`);
}
setInterval(handleTime, 1000);