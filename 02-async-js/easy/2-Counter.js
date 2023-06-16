// function Counter(n){
//     if(n > 0){
//         setTimeout(function(){
//            Counter(n-1) 
//         },1000)
//     }
// }

// Counter(10);

function counter(seconds) {
    console.log(seconds);
  
    if (seconds > 0) {
      setTimeout(function () {
        counter(seconds - 1);
      }, 1000);
    }
  }
  
  // Example usage
  counter(10);
  
