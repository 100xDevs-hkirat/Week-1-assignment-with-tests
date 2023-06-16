/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

function isAnagram(str1, str2) {
  if (str1.length != str2.length) {
    return false;
  }

  stringArray1 = str1.split("");
  stringArray2 = str2.split("");

  for (let i = 0; i < stringArray1.length; i++) {
    isfinded = false;
    for (let j = 0; j < stringArray2.length; j++) {
      if (stringArray1[i] === stringArray2[j]) {
        isfinded = true;
        stringArray2.splice(j, 1);
        break;
      }
    }

    if (isfinded == false) {
      return false;
    }
  }
  return true;
}

module.exports = isAnagram;
