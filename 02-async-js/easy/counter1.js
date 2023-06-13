let count =60;
function setIntervalCounter(){
    function increment(){
        count++;
        console.clear();
        console.log(count); 
        if(count>=70){
        console.clear()
        clearInterval(countId);
    }   
    }
    
   let countId = setInterval(increment, 1000);
   
}
setIntervalCounter();