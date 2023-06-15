const showTime=()=>{
    const currentTime = new Date();
    let hours = currentTime.getHours();
    let minutes = currentTime.getMinutes();
    let seconds = currentTime.getSeconds();
    const ampm="AM";
    let hours12=hours;
    if(hours>12){
      hours12-=12;
      ampm="PM";
    }
  
    hours=(hours.toString().length===1)?`0${hours}`:`${hours}`;
    hours12=(hours12.toString().length===1)?`0${hours12}`:`${hours12}`;
    minutes=(minutes.toString().length===1)?`0${minutes}`:`${minutes}`;
    seconds=(seconds.toString().length===1)?`0${seconds}`:`${seconds}`;
  
    const hr24=`${hours}:${minutes}:${seconds}`
    const hr12=`${hours12}:${minutes}:${seconds} ${ampm}`
    console.log(hr24);
    console.log(hr12);
  }
  
  setInterval(showTime,1000);