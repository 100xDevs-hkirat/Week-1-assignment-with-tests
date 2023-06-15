/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

function isAnagram(str1, str2) {
	const map = new Map();
	for (let c of str1) {
		let lc = c.toLowerCase();
		map.set(lc, (map.get(lc) || 0) + 1);
	}

	for (let c of str2) {
		let lc = c.toLowerCase();
		map.set(lc, (map.get(lc) || 0) - 1);
	}

	for (let value of map.values()) if (value !== 0) return false;
	return true;
}

module.exports = isAnagram;
