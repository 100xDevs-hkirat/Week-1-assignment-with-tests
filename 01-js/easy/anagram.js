/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

let sort = (str) => {
  return [...str].sort((a, b) => a.localeCompare(b)).join("");
};

function isAnagram(str1, str2) {
  let sortedStr1 = sort(str1.toLowerCase());
  let sortedStr2 = sort(str2.toLowerCase());

  return sortedStr1 === sortedStr2;
}

module.exports = isAnagram;
