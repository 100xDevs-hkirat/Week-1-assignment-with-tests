
let timer = ()=>{
let counter = 0;
setInterval(() => {
  console.clear();
  console.log(++counter);
}, 1000);
};

timer();