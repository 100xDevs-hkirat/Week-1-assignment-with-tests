Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
clock that shows you the current machine time?

Can you make it so that it updates every second, and shows time in the following formats - 

 - HH:MM::SS (Eg. 13:45:23)

 - HH:MM::SS AM/PM (Eg 01:45:23 PM)

 
var hour  = 0;
var minute = 0;
var second = 0;
var noon = 'AM'

function clock(){
  console.clear();
  second++;
  if(second>59){
    second = 0;
    minute++;
    if(minute>59){
      minute = 0;
      hour++;
      if(hour>12){
        hour = 0;
        if(noon==='AM'){
          noon = 'PM';
        }
        else{
          noon = 'AM';
        }
      }
    }
  }
  var padhour = hour;
  if(hour<10){
    padhour = '0'+hour;
  }
  var padminute = minute;
  if(minute<10){
    padminute = '0'+minute;
  }
  var padsecond = second;
  if(second<10){
    padsecond = '0'+second;
  }
  console.log(padhour+':'+padminute+':'+padsecond+' '+noon);
  setTimeout(clock,1000);
}
clock();
