var meridian = "AM";

let currentDate = new Date();

var SS = currentDate.getSeconds();
var HH = currentDate.getHours();
var MM = currentDate.getMinutes();

if(HH>12){
    merdian = "PM";
    HH-=12;
}

function clock(){
    console.clear();
    if(SS==60){
        SS=0;
        MM++;
    }
    else if(MM==60){
        MM=0;
        HH++;
        if(HH==13){
            HH=1;
            if(meridian=="AM")
                meridian = "PM";
            else
                merdian = "AM";
        }
    }
    console.log(HH+':'+MM+':'+SS+' '+meridian);
    SS++;
}

setInterval(clock,1000);