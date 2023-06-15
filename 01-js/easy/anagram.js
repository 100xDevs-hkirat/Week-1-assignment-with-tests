/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

function isAnagram(str1, str2) {

  str1 = str1.split(" ").join("").toLowerCase().split('').sort().join('');
  str2 = str2.split(" ").join("").toLowerCase().split('').sort().join('');

  return str1===str2;
}

module.exports = isAnagram;
console.log(isAnagram('Debit Card', 'Bad Credit'));