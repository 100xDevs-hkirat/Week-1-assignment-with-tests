//Counter without setInterval
//Without using setInterval, try to code a counter in Javascript.

function counter(duration) 
{
    let count = 0;
  
    function increment() 
    {
      console.log(count);
      count++;
  
      if (count <= duration) 
      {
        setTimeout(increment, 1 * 1000);
      }
    }
  
    increment();
}
  
counter(10);
