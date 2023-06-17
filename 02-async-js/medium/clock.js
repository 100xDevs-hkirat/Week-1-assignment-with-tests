function updateTime() {
    const currentTime = new Date();
    const hours = currentTime.getHours() < 10 ? 0 + `${currentTime.getHours()}` : currentTime.getHours();
    const minutes = currentTime.getMinutes() < 10 ? 0 + `${currentTime.getMinutes()}` : currentTime.getMinutes();
    const seconds = currentTime.getSeconds() < 10 ? 0 + `${currentTime.getSeconds()}` : currentTime.getSeconds();

    const formattedTime24 = `${hours}:${minutes}:${seconds}`;
    console.log(formattedTime24);

    const hours12 = hours > 11 ? ((hours - 12) < 10 ? 0 + `${hours - 12}` : hours - 12) : hours
    const msg = hours > 11 ? 'PM' : 'AM'

    const formattedTime12 = `${hours12}:${minutes}:${seconds} ` + msg
    console.log(formattedTime12)
}

function printTime(){
    console.clear()
    updateTime()
}

setInterval(printTime, 1000);


