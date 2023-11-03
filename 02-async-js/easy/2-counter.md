<!-- ## Counter without setInterval

Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.
 -->

let counter=1;
function countersss()
{
console.clear();
console.log(counter);
counter++;
setTimeout(countersss,1*1000);
}
setTimeout(countersss,1*1000);

(Hint: setTimeout)
