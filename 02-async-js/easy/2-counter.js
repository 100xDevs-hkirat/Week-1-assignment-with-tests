function counter(timer,mxm){
    if(timer <= mxm){
       setTimeout(function(){
          console.clear();
          console.log(timer) ;
          counter(timer + 1,mxm)
       },1000);
    }
}

counter(1,10);