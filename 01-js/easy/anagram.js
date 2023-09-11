/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

function isAnagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }
  if (str1 === "" && str2 == "") {
    return true
  }
  let a = str1.toLowerCase()
  let b = str2.toLowerCase()

  let obj1 = {};
  let wordOne = [...a]
  let wordTwo = [...b]
  wordOne.map((a) => {
    obj1[a] = a;
  })
  
  for (let i = 0; i < wordTwo.length; i++) {
    if (!obj1[wordTwo[i]]) {
      return false;
    } else {
      return true;
    }  
  }
}

isAnagram("si!","!is")

module.exports = isAnagram;
