/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function isPalindrome(str) {
	str = str.split(" ").join("");
	str = str.replace(/[.,\/#!?$%\^&\*;:{}=\-_`~()]/g, "");
	str1 = str.toLowerCase().split("").join("");
	strReverse = str1.split("").reverse().join("");
	console.log(str1, strReverse);
	if (str1 == strReverse) {
		return true;
	} else {
		return false;
	}
}

var x = isPalindrome("Eva, can I see bees in a cave?");
console.log(x);

module.exports = isPalindrome;
