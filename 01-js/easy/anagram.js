/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

function isAnagram(str1, str2) {
  const firstWord = str1.toLowerCase().trim().replace(/\s/g, "").split("");
  const secondWord = str2.toLowerCase().trim().replace(/\s/g, "").split("");

  const sortedFirstWord = firstWord.sort();
  const sortedSecondWord = secondWord.sort();

  if (sortedFirstWord.length !== sortedSecondWord.length) {
    return false;
  }

  for (let i = 0; i < firstWord.length; i++) {
    if (sortedFirstWord[i] !== sortedSecondWord[i]) {
      return false;
    }
  }

  return true;
}
isAnagram("r!osy adsfsdf", "jdhs");
module.exports = isAnagram;
