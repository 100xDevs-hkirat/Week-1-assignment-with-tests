
function printTime(number,delay){
    
    setTimeout(()=>{
        printTime(number+1,delay);},delay);
    
        console.clear();
        console.log(number);
        


}

printTime(1,1000);