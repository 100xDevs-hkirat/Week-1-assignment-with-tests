setInterval(()=>{

    let date=new Date();
    let [hours,minutes,seconds]=[String(date.getHours()).padStart(2,'0'),String(date.getMinutes()).padStart(2,'0'),String(date.getSeconds()).padStart(2,'0')];

    amOrpm=hours>=12? "PM":"AM";
    otherHour=parseInt(hours)%12 || 12;
    console.log(hours+":"+minutes+":"+seconds);
    console.log(otherHour+":"+minutes+":"+seconds+amOrpm);


    

},1000);


function printTime(){
    console.log("From  printTime")
    setTimeout(()=>{
        let date=new Date();
    let [hours,minutes,seconds]=[String(date.getHours()).padStart(2,'0'),String(date.getMinutes()).padStart(2,'0'),String(date.getSeconds()).padStart(2,'0')];

    amOrpm=hours>=12? "PM":"AM";
    otherHour=parseInt(hours)%12 || 12;
    console.log(hours+":"+minutes+":"+seconds);
    console.log(otherHour+":"+minutes+":"+seconds+amOrpm);

    printTime();

    },1000);
}

printTime();