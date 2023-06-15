function updatetime1(){
var x = new Date().toLocaleTimeString('en-US', { hour12: false });
console.log(x)
}
function updatetime2(){
var x= new Date().toLocaleTimeString()
console.log(x)
}
function clearconsole(){
    console.clear();
}

function displaytime(){
    clearconsole();
    updatetime1();
    updatetime2();
}
setInterval(displaytime,1000);
///





//////
const currentTime = new Date();

function timer(currentTime){
function increment(){
    currentTime.setSeconds(currentTime.getSeconds()+1); //increases second by one
    console.clear();
    const hour24F = getTime24(currentTime);
    const hour12F = getTime12(currentTime);
    console.log(hour24F);
    console.log(hour12F);
}
const timerId = setInterval(increment,1000);
return timerId;
}

function getTime12(timeRightnow){
    const hours= timeRightnow.getHours();
    const minutes = timeRightnow.getMinutes();
    const seconds = timeRightnow.getSeconds();

    const ampmString = hours <=12? "AM":"PM";
    const twelveHourFormat = hours % 12 || 12;  
    return `${padZero(twelveHourFormat)}:${padZero(minutes)}::${padZero(seconds)} ${ampmString}`;
}

function getTime24(date) {
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  return `${padZero(hours)}:${padZero(minutes)}::${padZero(seconds)}`;
}
function padZero(number) {
  return number.toString().padStart(2, '0');
}
timer(currentTime);