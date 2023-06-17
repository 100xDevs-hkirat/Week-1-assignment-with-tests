function clock(isRailwayClock){
    setTimeout(
        timer = () =>{
        let dt = new Date();
        let minutes = dt.getMinutes()< 10 ? "0" + dt.getMinutes() : dt.getMinutes();
        let seconds = dt.getSeconds()< 10 ? "0" + dt.getSeconds() : dt.getSeconds();
        let hours = dt.getHours();
        let am_pm = "";
        if(!isRailwayClock){
            am_pm = hours >= 12 ? "PM" : "AM";
            hours = dt.getHours() % 12 || 12;
           
        }
        hours = hours < 10 ? "0" + hours : hours;
        
        console.clear();
        console.log(hours + ":" + minutes + ":" + seconds + " " + am_pm);
        setTimeout(timer, 1000);
    },1000);

}

clock(false);
//clock(true);