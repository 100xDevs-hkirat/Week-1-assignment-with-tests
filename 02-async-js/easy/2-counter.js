function count(){
    let counter = 1;
    function updateCounter(){
        if(counter < 10){
            console.log(counter);
            counter++;
            setTimeout(updateCounter, 1000)
        }
    }
    updateCounter()
}

count();