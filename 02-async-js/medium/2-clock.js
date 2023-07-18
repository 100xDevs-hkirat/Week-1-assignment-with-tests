var date = new Date();
let hour =  date.getHours();
let min = date.getMinutes();
let sec = date.getSeconds();
setInterval( get_time,1000);


function get_time()
{
    console.log(hour+":"+min+":"+sec);
    if(hour<12)
    {
        console.log(hour+":"+min+":"+sec+" AM");
    }
    else console.log(hour-12+":"+min+":"+sec+" PM");
    sec++;
    if(sec>59)
    {
        sec = 0;
        min++;
        if(min>59)
        {
            min=0;
            hour++;
            if(hour>23)
            {
                hour=0;
            }
        }
    }
}
