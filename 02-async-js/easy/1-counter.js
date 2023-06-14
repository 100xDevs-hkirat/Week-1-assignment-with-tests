//Code With Promise

// function Counter(duration) {
//     var time = 1;
//     return new Promise(function(resolve) {
//      var interval = setInterval(function(){
//         console.clear()
//         console.log(time++);
//         if(time>duration) {
//             clearInterval(interval);
//             resolve();
//         }
//       }, 1000);
//     });
//   }
  
//   var interval = 10;
//   Counter(interval).then(function(){
//     console.log("Counter Done");
//   });


//Code without Promise

  function Counter(){
    console.clear();
    console.log(time++);
  }

  var time = 1;
  setInterval(Counter, 1000);
