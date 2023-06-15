/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function isPalindrome(str) {
	const cleanStr = str.replace(/[^0-9A-Z]+/gi, "");
	let l = 0,
		r = cleanStr.length - 1;
	while (l < r) {
		if (cleanStr[l++].toLowerCase() !== cleanStr[r--].toLowerCase()) return false;
	}

	return true;
}

module.exports = isPalindrome;
