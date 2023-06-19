/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

function isAnagram(str1, str2) {
  if (str1.length!== str2.length) {
    return false;
  }

  // sort() sorts the array, so to sort a string
  // convert it to an array, which is done by split(' ')
  // then use the sort method to sort the array
  // then, convert the array back to a string

  return str1.split('').sort().join('') === str2.split('').sort().join('');
}

module.exports = isAnagram;
