function TimeDisplay()
{
    let p='AM';
    const curr =new Date();
    let hours=curr.getHours().toString().padStart(2,'0');
    const min=curr.getMinutes().toString().padStart(2,'0');
    const sec=curr.getSeconds().toString().padStart(2,'0');
    console.clear();
    console.log(`${hours}:${min}:${sec}`);
    hours=curr.getHours();
    if(hours>=12)
    p='PM';
    if(hours>12)
    hours=hours-12;
    hours=hours.toString().padStart(2,'0');
    console.log(`${hours}:${min}:${sec} `+p);
}
setInterval(TimeDisplay, 1000);