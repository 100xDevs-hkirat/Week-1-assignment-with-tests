let minutes = 0, seconds = 0, hours = 0;

function clock() {

    seconds++;
    if (seconds === 60) {
        minutes++;
        seconds = 0;
        if (minutes === 60) {
            hours++;
            minutes = 0;
            if (hours === 24) {
                hours = 0;
            }
        }
    }

    let meridian = hours > 12 ? "PM" : "AM";

    let time = hours + ":" + minutes + ":" + seconds + " " + meridian;
    console.log(time);

}
setInterval(clock, 1000);