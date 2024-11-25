function infiniteCounter(count){
      setTimeout(()=>{
        console.clear();
        count=count+1;
        console.log(count);
        //recursion
        infiniteCounter(count);
      },1000)
    }
    
    
    infiniteCounter(0);