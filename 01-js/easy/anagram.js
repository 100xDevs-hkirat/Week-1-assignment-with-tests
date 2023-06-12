/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

function isAnagram(str1, str2) {

  // convert them to lowercase incaase of case insensitivity

  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();

  // split the words into array , sort the words in ascending and join them back into strings

  const sortedStr1 = str1.split('').sort().join('');
  const sortedStr2 = str2.split('').sort().join('');

  // compare both the sorted words to check if they match

  return sortedStr1 === sortedStr2;

}

console.log(isAnagram('rasp','spar'))
console.log(isAnagram('listen','silent'))
console.log(isAnagram('listen','silents'))

module.exports = isAnagram;
