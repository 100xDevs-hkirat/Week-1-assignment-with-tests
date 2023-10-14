//HH:MM::SS (Eg. 13:45:23) format

function printTime(){
    console.clear();
    
    let currentDate = new Date();
    const answer = `${currentDate.getHours()}:${currentDate.getMinutes()}:${currentDate.getSeconds()}`;
    console.log(answer);
}

setInterval(printTime, 1000);

//HH:MM::SS AM/PM (Eg 01:45:23 PM) format

function printTime(){
    console.clear();

    let currentDate = new Date();

    const sec = currentDate.getSeconds();
    const min = currentDate.getMinutes();
    const hour = () => {
        currentDate.getHours();
        if(currentDate.getHours() > 12){
            return (currentDate.getHours() - 12);
        }
        else{
            return currentDate.getHours();
        }
    }
    
    const amOrPm = () => {
        if(currentDate.getHours() > 12){
            return "PM";
        }
        else{
            return "AM";
        }
    }

    console.log(`${hour()}:${min}:${sec} ${amOrPm()}`);
    setTimeout(printTime,1000);
}

setTimeout(printTime,1000);