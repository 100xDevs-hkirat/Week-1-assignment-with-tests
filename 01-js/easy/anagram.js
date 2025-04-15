/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

function isAnagram(str1, str2) {
  // array the character 
  const value_1 = str1.toLowerCase().split('').sort().join()
  const value_2 = str2.toLowerCase().split('').sort().join()

  return value_1 == value_2
}

module.exports = isAnagram;
