function print(n){
    console.log(n);
}

for(let i=1;i<=100;i++){
    setTimeout(function(){console.clear();print(i)},1000*i);
}