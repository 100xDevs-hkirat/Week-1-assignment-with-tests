
function clock(){
    const date = new Date();
    console.clear();
    const time = date.getHours()+":"+date.getMinutes()+":"+date.getSeconds();
    console.log(time);
    setTimeout(clock,1000);
}

clock();

