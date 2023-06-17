/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function isPalindrome(str) {
	str = str.toLowerCase();
	let i = 0, j = str.length - 1;
	while (i < j) {
		if (str[i] == ' ') {
			++i;
		} else if (str[j] == ' ') {
			--j;
		} else if (!isAlphabet(str, i)) {
			++i;
		} else if (!isAlphabet(str, j)) {
			--j;
		} else if(str[i++] != str[j--]) {
			return false;
		}
	}
	return true;
}
function isBetween(charCode) {
	return charCode >= 'a'.charCodeAt(0) && charCode <= 'z'.charCodeAt(0);
}
function isAlphabet(str,k) {
	if (isBetween(str.charCodeAt(k))) {
		return true;
	}
	return false
}

module.exports = isPalindrome;
