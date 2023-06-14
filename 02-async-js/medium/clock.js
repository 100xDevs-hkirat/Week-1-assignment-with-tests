/**
 * Counter without setInterval
 * Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.
 *
 * (Hint: setTimeout)
 */



/**
 *
 * @param hours
 * @param minutes
 * @param seconds
 * @param includeMeridiem
 * @returns {string}
 */
function formatTime(hours, minutes, seconds, includeMeridiem) {
    let formattedTime = `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)}`;

    if (includeMeridiem) {
        const meridiem = hours >= 12 ? 'PM' : 'AM';
        formattedTime += ` ${meridiem}`;
    }

    return formattedTime;
}

function padZero(number) {
    return number.toString().padStart(2, '0');
}

function displayClock() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    const time12HourFormat = formatTime(hours % 12 || 12, minutes, seconds, true);
    const time24HourFormat = formatTime(hours, minutes, seconds, false);

    console.clear();
    console.log(`12-Hour Format: ${time12HourFormat}`);
    console.log(`24-Hour Format: ${time24HourFormat}`);

    setTimeout(displayClock, 1000);
}

// Start displaying the clock
displayClock();
