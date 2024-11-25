setInterval(screenTime,1000);
function screenTime(){
  console.clear();
   const hours = String(new Date().getHours()).padStart(2, '0');
  const minutes = String(new Date().getMinutes()).padStart(2, '0');
  const seconds = String(new Date().getSeconds()).padStart(2, '0');


  let amOrPm = 'AM';
if (hours > 12) {
  hours -= 12;
  amOrPm = 'PM';
}

  console.log(`${hours}:${minutes}:${seconds} ${amOrPm}`);
}
const time=new Date().getTime();
console.log(time);