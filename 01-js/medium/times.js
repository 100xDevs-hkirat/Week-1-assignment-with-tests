

function calculateTime(n) {
     var startTime=performance.now();
    var sum=0;
    for(var i=1;i<=n;i++){
        sum+=i;
    }
    var endTime=performance.now();
    var timePassed=(endTime-startTime)/1000;
    return timePassed;    
}
