
ctr = 0;
function counter(){
    console.clear();
    console.log(ctr);
    ctr+=1;
    setTimeout(counter,1000);
}

counter();