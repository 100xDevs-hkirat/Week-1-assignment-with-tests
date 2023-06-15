/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

function isAnagram(str1, str2) {
  const sortedS1 = str1.toLowerCase().split('').sort().join('');
  const sortedS2 = str2.toLowerCase().split('').sort().join('');
  console.log(sortedS1, sortedS2)

  if(sortedS1.length !== sortedS2.length) {
    return false;
  }
  else {
    for(let i = 0; i < sortedS1.length; i++) {
      if(sortedS1[i] !== sortedS2[i]) {
        return false;
      }
    }
    return true;
  }
}

module.exports = isAnagram;
