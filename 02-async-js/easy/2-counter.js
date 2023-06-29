
a = 0
function print(){
    console.clear();
    console.log(a);
    a += 1;
}

for(i=1; i<50 ; i++){
    setTimeout(print, i * 1000);
}