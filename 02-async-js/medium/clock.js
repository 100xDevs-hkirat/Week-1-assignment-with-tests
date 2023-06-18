

let currenthour,currentMin,currentSec;
let timeH;
let am_pm;


const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  
 

function enterTimeFormat(){
    readline.question(`Enter time format to display : HH:MM:SS or HH:MM:SS AM/PM , enter 1 or 2 for selection`, format => {
        let currentDate = new Date();
            currenthour = currentDate.getHours();
            currentMin = currentDate.getMinutes();
            currentSec = currentDate.getSeconds();
            printCounter(currenthour,format);

         readline.close();
       });

}

function printCounter(currenthour,format){

    if(format ==1){
        timeH = 24;
        am_pm = 'off';
    }else {
        timeH = 12;
        if (currenthour>12)
            am_pm = 'pm';
        else
            am_pm = 'am';    
    }

    setInterval(printC,1000);

}

function printC(){
    console.clear();
    if (am_pm=='off')
        console.log(`Current Time is ${currenthour%timeH} : ${currentMin%60} : ${currentSec%60} `);
    else {
            if(currenthour!=12)
                console.log(`Current Time is ${currenthour%timeH} : ${currentMin%60} : ${currentSec%60} ${am_pm}`);
            else{
                console.log(`Current Time is 12 : ${currentMin%60} : ${currentSec%60} ${am_pm}`);
            }
    }
    currentSec = currentSec+1;
    if (currentSec==60){
        currentMin +=1;
        currentSec =0;
    }
    if (currentMin == 60){
        currenthour+=1;
        currentMin =0;
    }
    if (currenthour == 24 || currenthour > timeH){
        currenthour = currenthour%timeH;
        if (am_pm=='pm'){
            am_pm = 'am';
        }else if(am_pm=='am'){
            am_pm = 'pm';
        }
    } 
}

enterTimeFormat();


