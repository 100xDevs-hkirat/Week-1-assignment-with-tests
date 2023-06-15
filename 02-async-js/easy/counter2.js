let counter = 1;

function stopwatch(){
  console.clear(); 
  console.log(counter);
  counter=counter+1;
  setTimeout(stopwatch, 1000);  

}

stopwatch()