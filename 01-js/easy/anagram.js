/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

const MAX_CHAR_LENGTH = 256;

function isAnagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }

  const size = str1.length;

  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();

  let count = [];
  for (let index = 0; index < MAX_CHAR_LENGTH; index++) {
    count[index] = 0;
  }

  for (let index = 0; index < size; index++) {
    if (str1[index] === ' ') {
      continue;
    }

    let asciiCode = str1.charCodeAt(index);
    count[asciiCode] += 1;
  }

  for (let index = 0; index < size; index++) {
    if (str2[index] === ' ') {
      continue;
    }

    let asciiCode = str2.charCodeAt(index);
    count[asciiCode] -= 1;
  }

  for (let index = 0; index < MAX_CHAR_LENGTH; index++) {
    if (count[index] === 0) {
      continue;
    };

    return false;
  }

  return true;
}

module.exports = isAnagram;
