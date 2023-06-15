var cnt=0;
function sol(){
    console.clear();
    cnt++;
    var datee= new Date();
    const f1=datee.toLocaleTimeString('en-US',{
        hour:"numeric",
        minute:'numeric',
        second:'numeric',
        hour12:true 
    })
    const [time,median]=f1.split(' ');
    let [hours,minutes,seconds]=time.split(':');
    if(median==="PM" && hours!==12){
        hours=String(parseInt(hours,10)+12);
    }
    const f2=`${hours}:${minutes}:${seconds}`;
    console.log(cnt);
    console.log(f2);
    setTimeout(sol, 1000);
}
sol();