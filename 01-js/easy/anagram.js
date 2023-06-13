/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

function isAnagram(str1, str2) {
  // length should be same 
  // occurence of letters are same
  if (str1.length !== str2.length) return false
  let oc1 = {}
  let oc2 = {}
  str1 = str1.toLowerCase()
  str2 = str2.toLowerCase()
  for (let i of str1) {
    if (oc1.hasOwnProperty(i)) oc1[i] += 1
    else oc1[i] = 1
  }
  for (let i of str2) {
    if (oc2.hasOwnProperty(i)) oc2[i] += 1
    else oc2[i] = 1
  }

  for (let i in oc1) {
    if (oc1[i] !== oc2[i]) return false
  }
  return true
}


module.exports = isAnagram;
