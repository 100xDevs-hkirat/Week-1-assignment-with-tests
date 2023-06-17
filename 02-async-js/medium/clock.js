function formatTime(num) {
    return num.toString().padStart(2, '0');
}

function clock() {
    console.clear();
    let currentDate = new Date();
    let hour = formatTime(currentDate.getHours());
    let minutes = formatTime(currentDate.getMinutes());
    let seconds = formatTime(currentDate.getSeconds());
    let time1 = hour + ":" + minutes + ":" + seconds;
    console.log(time1);

    let time2 = "";
    if (+hour > 12) {
        hour = +hour - 12;
        hour = formatTime(hour);
        time2 = hour + ":" + minutes + ":" + seconds + " PM";
    } else {
        time2 = hour + ":" + minutes + ":" + seconds + " AM";
    }
    console.log(time2);
}

setInterval(clock, 1000);
