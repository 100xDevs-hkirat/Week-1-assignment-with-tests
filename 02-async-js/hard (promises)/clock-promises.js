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

function getCurrentTime(){
 return new Promise(function(resolve,reject){
     const now = new Date();
     const hours = now.getHours();
     const minutes = now.getMinutes();
     const seconds = now.getSeconds();

     const time ={
         hours,
         minutes,
         seconds
     }
     resolve(time);
 });
}


function displayClock(){
    getCurrentTime()
        .then(function(time){
            const time12HourFormat = formatTime(time.hours % 12 || 12, time.minutes, time.seconds, true);
            const time24HourFormat = formatTime(time.hours, time.minutes, time.seconds, false);

            console.clear();
            console.log(`12-Hour Format: ${time12HourFormat}`);
            console.log(`24-Hour Format: ${time24HourFormat}`);
        })
        .catch(function(error){
            console.error('Error getting current time:', error);
        })
        .finally(function(){
           setTimeout(displayClock, 1000);
        });
}


displayClock();