
/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

function isAnagram(str1, str2) {
  // Remove whitespace and convert to lowercase
  const formattedStr1 = str1.replace(/\s/g, "").toLowerCase();
  const formattedStr2 = str2.replace(/\s/g, "").toLowerCase();

  // Sort the characters in both strings
  const sortedStr1 = formattedStr1.split("").sort().join("");
  const sortedStr2 = formattedStr2.split("").sort().join("");

  // Compare the sorted strings
  return sortedStr1 === sortedStr2;
}
module.exports = isAnagram;