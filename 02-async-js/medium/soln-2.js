function getCurrentTime() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    return {
        hours,
        minutes,
        seconds
    };
}

function formatTimeWithAMPM(hours, minutes, seconds) {
    const ampm = hours >= 12 ? 'PM' : 'AM';
    const formattedHours = hours % 12 || 12;

    return `${formattedHours}:${padZero(minutes)}:${padZero(seconds)} ${ampm}`;
}

function formatTime(hours, minutes, seconds) {
    return `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)}`;
}

function padZero(number) {
    return String(number).padStart(2, '0');
}

function updateClock() {
    const currentTime = getCurrentTime();
    const timeFormat = formatTime(currentTime.hours, currentTime.minutes, currentTime.seconds);
    const timeFormatWithAMPM = formatTimeWithAMPM(currentTime.hours, currentTime.minutes, currentTime.seconds);

    console.clear();
    console.log('Current Time:');
    console.log(`- HH:MM:SS: ${timeFormat}`);
    console.log(`- HH:MM:SS AM/PM: ${timeFormatWithAMPM}`);
}

setInterval(updateClock, 1000);
