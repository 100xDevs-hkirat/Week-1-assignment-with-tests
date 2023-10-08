/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

function isAnagram(str1, str2) {
	str1 = str1.toLowerCase();
	str2 = str2.toLowerCase();
	len1 = str1.length;
	len2 = str2.length;
	if (len1 !== len2) {
		return false
	}
	word1 = {};
	word2 = {};

	for(let i = 0; i < len1; i++) {
		word1[str1[i]] = (word1[str1[i]] || 0) + 1;
		word2[str2[i]] = (word2[str2[i]] || 0) + 1;
	}

	for(const key in word1) {
		if (word1[key] !== word2[key]) {
			return false;
		}
	}
	return true;
}

module.exports = isAnagram;
