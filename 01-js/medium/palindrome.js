/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function getCleanString(str) {
	let length = str.length;
	let text = "";
	for (let i = 0; i < length; i++) {
		if (str[i] <= "z" && str[i] >= "a") {
			text += str[i];
		}
	}
	return text;
}

function checkForPalindrome(text) {
	let length = text.length;
	for (i = 0; i < length; i++) {
		if (text[i] != text[length - 1 - i]) {
			return false;
		}
	}
	return true;
}

function isPalindrome(str) {
	return checkForPalindrome(getCleanString(str.toLowerCase()));
}

module.exports = isPalindrome;
