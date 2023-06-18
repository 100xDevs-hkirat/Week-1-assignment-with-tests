class clock{
    constructor(){
        const currentTime= new Date();
        this.hour=currentTime.getHours();
        this.minutes=currentTime.getMinutes();
        this.seconds=currentTime.getSeconds();
    }

    updateTime(){
        if(this.seconds>59){
            this.seconds=0
            if(this.minutes>59){
                if(this.hour>24){
                    this.hour=0
                }
                else{
                    this.hour+=1
                }
            }
            else{
                this.minutes+=1
            }
        }
        else{
            this.seconds+=1
        }
    }
}

let time= new clock();
function displayTime(){
    time.updateTime();
    console.clear();
    console.log(time.hour+':'+time.minutes+':'+time.seconds);
    if(time.hour>12){
        console.log(time.hour%12+':'+time.minutes+':'+time.seconds+' PM');
    }
    else{
        console.log(time.hour%12+':'+time.minutes+':'+time.seconds+' AM');
    }
}

setInterval(displayTime,1000)