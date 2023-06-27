## Counter without setInterval

Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.

### Solution
```js
let count = 1;
function printTimer() {
  console.clear();
  console.log(count);
  count = count + 1;
  setTimeout(printTimer, 1000);
}

printTimer();
```

(Hint: setTimeout)