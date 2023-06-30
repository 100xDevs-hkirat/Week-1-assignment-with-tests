const date = new Date();
let currentHour = date.getHours();
let currentMinute = date.getMinutes();
let currentSeconds = date.getSeconds();


// let currentTime = date.toLocaleTimeString();

// console.log(currentTime);

// let indexOfHourEnd = currentTime.indexOf(':');
// let indexOfMinuteEnd = indexOfHourEnd + 3;
// let indexOfSecondsEnd = indexOfMinuteEnd + 3;

// let currentHour = currentTime.slice(0, indexOfHourEnd);
// console.log(currentHour);
// let currentMinute = currentTime.slice(indexOfHourEnd+1, indexOfMinuteEnd);
// console.log(currentMinute);
// let currentSeconds = currentTime.slice(indexOfMinuteEnd + 1, indexOfSecondsEnd);
// console.log(currentSeconds);

startCounterForSeconds();

function startCounterForSeconds(){
    currentSeconds++;
    if(currentSeconds === 60){
        currentSeconds = 0;
        changeMinute();
    }
    // console.log(currentSeconds);
    setTimeout(startCounterForSeconds, 1000);
}

function changeMinute(){
    currentMinute++;
    if(currentMinute === 60){
        currentMinute = 0;
        changeHour();
    }
    // console.log(currentMinute);
}

function changeHour(){
    currentHour++;
    if(currentHour === 24){
        currentHour = 0;
    }
    // console.log(currentHour);
}

function updateClock(currentHour, currentMinute, currentSeconds) {
    let currentHourIn12hFormat = currentHour > 12 ? currentHour - 12 : currentHour;
    let format = currentHour > 12 ? 'PM' : 'AM';
    if(currentHour === 0) currentHourIn12hFormat = 12;
    currentHour = addLeadingZeros(currentHour, 2);
    currentMinute = addLeadingZeros(currentMinute, 2);
    currentSeconds = addLeadingZeros(currentSeconds, 2);
    currentHourIn12hFormat = addLeadingZeros(currentHourIn12hFormat, 2);    
    
    console.log(`${currentHour}:${currentMinute}:${currentSeconds}`);
    console.log(`${currentHourIn12hFormat}:${currentMinute}:${currentSeconds} ${format}`);
}

setInterval(refreshClock, 1000);
function refreshClock() {
    console.clear();
    updateClock(currentHour, currentMinute, currentSeconds);
}

function addLeadingZeros(number, length) {
    const numberString = String(number);
    return numberString.padStart(length, '0');
}