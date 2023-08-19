

function counter() {

    var count = 0;
  
    function recursiveFn() {
      setTimeout(() => {
        console.clear();
        console.log(count);
        count++;
        recursiveFn();
      }, 1000);
    }
  
    recursiveFn();
    
  }
  
  counter();
  