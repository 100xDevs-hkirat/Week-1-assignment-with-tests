/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

function isAnagram(str1, str2) {
  if (str1.length != str2.length) {
    return false
  }

  // Converts to lower case, handles capital cases
  str1 = str1.toLowerCase()
  str2 = str2.toLowerCase()

  let n = str1.length

  let arr1 = {}
  let arr2 = {}

  // Count occurrences of character in str1
  for (let i = 0; i < n; i++) {
    let ind = str1[i]

    if (arr1[ind]) {
      arr1[ind]++
    } else {
      arr1[ind] = 1
    }
  }

  // Count occurrences of character in str2
  for (let i = 0; i < n; i++) {
    let ind = str2[i]

    if (arr2[ind]) {
      arr2[ind]++
    } else {
      arr2[ind] = 1
    }
  }

  // Checking the frequency of each character, if not equal => return false(not an anagram)
  for (let i in arr1) {
    if (arr1[i] !== arr2[i]) {
      return false
    }
  }

  return true
}

module.exports = isAnagram
