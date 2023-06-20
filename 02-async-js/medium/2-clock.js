// Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
// clock that shows you the current machine time?

// Can you make it so that it updates every second, and shows time in the following formats - 

//  - HH:MM::SS (Eg. 13:45:23)

//  - HH:MM::SS AM/PM (Eg 01:45:23 PM)

var currentTime = new Date();


var hours = currentTime.getHours();
var minutes = currentTime.getMinutes();
var seconds = currentTime.getSeconds();

var hours_12=0;
if(hours>12){
    hours_12=hours-12;
}
else{
    hours_12=hours;
}




function updateTime()
{
    seconds+=1;
    if(seconds > 59)
    {
        seconds = 0;
        minutes+=1;
        if(minutes > 59)
        {
            minutes = 0;
            hours+=1;
            hours_12+=1;
        }
    }
    var formattedTime_24 = `${hours}:${minutes}:${seconds}`;
    console.log("Time in 24hr format: "+formattedTime_24);
    var formattedTime_12= `${hours_12}:${minutes}:${seconds}`;
    console.log("Time in 12hr format: "+formattedTime_12+"\n");
    
}
setInterval(updateTime, 1000);


