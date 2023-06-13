//reucursive counter
const counterUsingSetTimeout = (count = 0) => {
  console.log(count);
  count++;
  setTimeout(counterUsingSetTimeout, 1000, count);
};
// counter using setInterval
const counterUsingSetInterval = (count = 0, callback) => {
  setInterval(() => {
    !callback && console.log(count); // no console.log if this is used as a ulitity function
    callback(); // this call back refers to the callback associates with the assignment of medium level clock.j

    count++;
  }, 1000);
};

const testThisCode = () => {
  // counterUsingSetTimeout();
  // counterUsingSetInterval();
};
//testThisCode();

module.exports = { counterUsingSetTimeout, counterUsingSetInterval };
