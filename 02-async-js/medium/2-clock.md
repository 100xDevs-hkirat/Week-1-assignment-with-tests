Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
clock that shows you the current machine time?

Can you make it so that it updates every second, and shows time in the following formats - 

 - HH:MM::SS (Eg. 13:45:23)

 - HH:MM::SS AM/PM (Eg 01:45:23 PM)


function currentTime(){
  var time = new Date;

  var hour = time.getHours();
  var minute = time.getMinutes();
  var second = time.getSeconds();

  second = (second<10?"0":"")+second;
  minute = (minute<10?"0":"")+minute;

  var meridiem = (hour<12)?"AM":"PM";

  hour = (hour > 12) ? hour - 12 : hour;
  hour = (hour === 0) ? 12 : hour;

  console.log(hour+":"+minute+":"+second+" "+meridiem)
  
}

currentTime();