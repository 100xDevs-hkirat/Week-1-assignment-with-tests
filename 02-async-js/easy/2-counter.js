var cnt=0;
// setTimeout(() => {
//    // console.clear();
//     cnt++;
//     console.log(cnt);
// },1000);
function sol(){
    console.clear();
    cnt++;
    console.log(cnt);
    setTimeout(sol, 1000);
}
sol();