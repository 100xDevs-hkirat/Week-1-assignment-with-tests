/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

function isAlphabetic(char) {
  return (char >= "a" && char <= "z") || (char >= "A" && char <= "Z");
}

function isAnagram(str1, str2) {
  const str1FrequencyMap = {};
  const str2FrequencyMap = {};

  for (const ch of str1) {
    let char1 = ch;
    if (isAlphabetic(ch)) {
      char1 = char1.toLowerCase();
    }

    if (str1FrequencyMap[char1]) str1FrequencyMap[char1]++;
    else str1FrequencyMap[char1] = 1;
  }
  for (const ch of str2) {
    let char2 = ch;
    if (isAlphabetic(ch)) {
      char2 = char2.toLowerCase();
    }
    if (str2FrequencyMap[char2]) str2FrequencyMap[char2]++;
    else str2FrequencyMap[char2] = 1;
  }

  return (
    str1.length === str2.length &&
    Object.keys(str1FrequencyMap).every(
      (key) => str1FrequencyMap[key] === str2FrequencyMap[key]
    )
  );
}

module.exports = isAnagram;
