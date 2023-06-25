/* Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
clock that shows you the current machine time?

Can you make it so that it updates every second, and shows time in the following formats - 

 - HH:MM::SS (Eg. 13:45:23)

 - HH:MM::SS AM/PM (Eg 01:45:23 PM) */

 var d = new Date();
 var hour = d.getHours();
 var min = d.getMinutes();
 var second = d.getSeconds();

function time(){
  console.clear();
  second = (second  + 1) % 60;
  if (second == 0){
    min = (min + 1) % 60;
  }
  if (min == 0 && second == 0){
    hour = (  hour + 1 ) % 24;
  }
  console.log(hour + ':' + String(min).padStart(2,'0') + ':' + String(second).padStart(2,'0'));
}

setInterval(time,1000);