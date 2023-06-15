/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

function isAnagram(str1, str2) {
  let characters1 = [];
  let characters2 = [];

  for (let i = 0; i < str1.length; i++) {
    characters1.push(str1[i].toLowerCase());
  }
  for (let i = 0; i < str2.length; i++) {
    characters2.push(str2[i].toLowerCase());
  }

  let letter1 = characters1.sort().join("");
  let letter2 = characters2.sort().join("");
  // console.log(letter1);
  // console.log(letter2);
  if (letter1 == letter2) {
    return true
  }
  return false
}
console.log(isAnagram('Debit Card', 'Bad Credit'));
module.exports = isAnagram;
