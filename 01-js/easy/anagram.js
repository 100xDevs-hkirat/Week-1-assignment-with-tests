/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/
const getSortedString = str => str.toLowerCase().split('').sort().join('')

function isAnagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false
  }

  return getSortedString(str1) === getSortedString(str2)
}

module.exports = isAnagram
