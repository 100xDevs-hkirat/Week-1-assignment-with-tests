// HH:: MM:: SS

let date = new Date();
let sec = date.getSeconds(), min=date.getMinutes(), hr=date.getHours();


function showTime(){
    // my code
    // if(sec==60){
    //     sec=0;
    // }if(min==60)min=0;
    // if(hr==24)hr=0;
    // if(sec<=60){
    //     sec+=1;
    //     if(sec==60){
    //         min+=1;
    //     }if(min==60){
    //         hr+=1;
    //     }
    // }
    // console.clear();
    // console.log(`${hr}::${min}::${sec}`);
    sec=(sec+1)%60;
    if(sec==0){
        min=(min+1)%60;
        if(min==0)
            hr=(hr+1)%24;
    }
    console.clear();
    console.log(`${hr.toString().padStart(2, 0)}::${min.toString().padStart()}::${sec.toString().padStart()}`);
}
function setClock(){
    setInterval(()=>{
        showTime()
    },1000);
}
setClock();