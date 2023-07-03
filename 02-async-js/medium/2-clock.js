let dateObj=new Date();
let sec=dateObj.getSeconds(), min=dateObj.getMinutes(),hr=dateObj.getHours();

setInterval(()=>{
    sec++;
    if(sec===60){
        min+=1;
        sec=0;
    }
    if(min===60){
        hr+=1;
        min=0;
    }
    console.log(showTime(hr,min,sec));}
    ,1000);

showTime=(hr,min,sec)=>{
    let hr24=hr%24;
    let time24=(hr24<10)?"0"+hr24+":":hr24+":";
    let hr12=hr%12;
    time24=(min<10)?time24+"0"+min+":":time24+min+":";
    time24=(sec<10)?time24+"0"+sec:time24+ sec;
    let timeOfDay=(hr24>13)?"PM":"AM";
    let time12=((hr12==0)?12:(hr12<10)?"0"+hr12+":":hr12+":")+":";
    time12=(min<10)?time12+"0"+min+":":time12+min+":";
    time12=(sec<10)?time12+"0"+sec:time12+ sec;
    time12+=" "+timeOfDay;
    console.log(time24);
    console.log(time12);
}
