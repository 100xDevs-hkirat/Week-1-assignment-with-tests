function printTime(){
    let timestamp = new Date();
    let hours = timestamp.getHours();
    let minutes = timestamp.getMinutes().toString().padStart(2,0);
    let seconds = timestamp.getSeconds().toString().padStart(2,0);


    let format1 = `${hours}:${minutes}:${seconds}`;

    let ampm = hours >= 12 ? 'PM' : 'AM'
    let hours_format2 = hours > 12 ? (hours-12) : hours;
    hours_format2 = hours_format2.toString().padStart(2,0);

    let format2 = `${hours_format2}:${minutes}:${seconds} ${ampm}`;

    console.log(`Current Time (24hr - HH:MM:SS) : ${format1}`);
    console.log(`Current Time (HH:MM:SS AM/PM) : ${format2}`);
}

printTime()
setInterval(() => {
    console.clear();
    printTime();
},1000);
