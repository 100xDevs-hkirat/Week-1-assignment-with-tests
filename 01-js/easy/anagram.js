/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

function isAnagram(str1, str2) {
  var string1 = str1.toLowerCase()
  var string2 = str2.toLowerCase()

  var String1 = string1.split('')
  var String2 = string2.split('')

  if (String1.length !== String2.length) {
    return false
  }
  for (var i = 0; i < String1.length; i++) {
    count = 0
    for (var j = 0; j < String2.length; j++) {
      if (String1[i] === String2[j]) {
        count = 1
      }
    }
    if (count === 0) {
      return false
    }
  }
  return true
}

module.exports = isAnagram
