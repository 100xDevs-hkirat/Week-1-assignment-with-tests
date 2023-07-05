var meridian = "AM";

var SS = 1;
var HH = 12;
var MM =59;

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