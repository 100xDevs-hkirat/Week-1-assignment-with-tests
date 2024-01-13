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

  let freq1 = Array(26).fill(0);
  let freq2 = Array(26).fill(0);

  for (let i = 0; i < str1.length; i++) {
    if (str1[i] === ' ') {
      continue;
    }
    if (str1[i] >= 'A' && str1[i] <= 'Z') {
      freq1[str1[i].charCodeAt(0) - 'A'.charCodeAt(0)]++;
    } else {
      freq1[str1[i].charCodeAt(0) - 'a'.charCodeAt(0)]++;
    }
  }

  for (let i = 0; i < str2.length; i++) {
    if (str2[i] === ' ') {
      continue;
    }
    if (str2[i] >= 'A' && str2[i] <= 'Z') {
      freq2[str2[i].charCodeAt(0) - 'A'.charCodeAt(0)]++;
    } else {
      freq2[str2[i].charCodeAt(0) - 'a'.charCodeAt(0)]++;
    }
  }

  for (let i = 0; i < 26; i++) {
    if (freq1[i] !== freq2[i]) {
      return false;
    }
  }

  return true;
}

// console.log(isAnagram("abc", "bac"));
module.exports = isAnagram;

