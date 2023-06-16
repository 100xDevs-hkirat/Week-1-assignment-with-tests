let cnt = 0;
function count(){
    cnt++;
    console.clear()
    console.log(cnt)
    setTimeout(count,1000)
}
count()